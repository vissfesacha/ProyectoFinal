
const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {

    if (err) {
      return res.status(500).json({
        error: err
      });

    } else {

      const user = new User({
        username: req.body.username,
        password: hash,
       
      });
      user.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });

});
router.post('/login', (req, res) => {
  User.find({ username: req.body.username })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        if (result) {
         const token= jwt.sign({
            username: user[0].username,
            userId: user[0]._id
          },"Secretin",
          {
            expiresIn:"1h"
          }
          );
         

          return res.send(
            {token:token,
              admin:user[0].admin
            });
      
        }
        res.status(200).json({
          message: 'Authentication failed'
        });
      });
    })
    .catch(err => res.status(400).json('Error: ' + err));


});

router.post('/auth', (req, res) => {
 
    try {
      const decoded = jwt.verify(req.body.token,"Secretin");  
      
     if (decoded) {
         res.send(decoded);
     }
    } catch (error) {
      return res.status(401).json({
        message:'Authentication Failed'
    });
    }
});

router.post('/checkAdmin', async (req, res) => {
 
  try {
    const user= await User.findById({_id:req.body.userId});
    if (user.admin==true) {
      res.send("xd");
    }else{
      throw new Error("ERROR!");
    }
  } catch (error) {
    return res.status(401).json({
      message:'Authentication Failed'
  });
  }
});






router.post("/addToCart",  (req,res) => { 

  User.findById({ _id: req.body.userid }, (err, userInfo) => {
    let duplicate = false;
  
    
  
    userInfo.cart.forEach((item) => {
        if (item.productID == req.body.id) {
                duplicate = true;
         }
    })
   
  
   
    if (duplicate) {


    
  User.findOneAndUpdate(
  { _id: req.body.userid, "cart.productID": req.body.id },
  { $inc: { "cart.$.quantity": 1 } },
  { new: true }, 
  (err, userInfo) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json(userInfo.cart)
  }
)
        
    } else {
        

      
        User.findByIdAndUpdate({ _id: req.body.userid },
            {
                $push: {
                    cart: {
                        productID: req.body.id,
                        quantity: 1,
                        date: Date.now()
                    }
                }
            },
            (err, userInfo) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(userInfo)
            }
        )
    }
})
})





router.post('/RemoveCart', async (req, res) => {
  
  let borrable=false;
  
  const f=await User.findById({ _id: req.body.userid});
  f.cart.forEach((item) => {
    if (item.productID == req.body.id) {
           if (item.quantity==1) {
             borrable=true;
           }else{
            borrable=false;
           }
     }
})

if (borrable==false) {

const xd=await User.findOneAndUpdate(
  { _id: req.body.userid, "cart.productID": req.body.id },
  { $inc: { "cart.$.quantity": -1 } },
  { new: true }
  
)

res.status(200).json(xd)
}else{

const xd=await User.findOneAndUpdate(
  { _id: req.body.userid, "cart.productID": req.body.id },
  { $pull: { "cart":{"productID":req.body.id}} },
  { new: true }
  
)

res.status(200).json(xd)
}


  
  
   
      
  } catch (error) {
   res.send({message:"error"})
       
  }
  
  

});

router.post('/RemoveAllCart', async (req, res) => {

  const xd=await User.findOneAndUpdate(
    { _id: req.body.userid},
    {  $unset: { "cart": 1 } },
    { new: true }
  )
  res.status(200).json(xd)
    try {
    } catch (error) {
     res.send({message:"error"})
         
    }
  });

router.get('/carProducts/:userid', async (req, res) => {
  
  
  try {
    var productos=[];
    const user= await User.findById({_id:req.params.userid});

   for (let i = 0; i < user.cart.length; i++) {
  const pro= await Product.findById({_id:user.cart[i].productID});
 
  const newpro = ({
    _id:pro._id,
    model:pro.model,
    code:pro.code,
    brand:pro.brand,
    description:pro.description,
    value:pro.value,
    size:pro.size,
    stock:pro.stock,
    date:pro.date,
    image:pro.image,
    quantity:user.cart[i].quantity,
    total:user.cart[i].quantity*pro.value
  });
  
  
  
  
  productos.push(newpro);
 
}  

        
  res.json(productos);
 
  } catch (error) {
    res.send(error)
  }

  
});

module.exports = router;