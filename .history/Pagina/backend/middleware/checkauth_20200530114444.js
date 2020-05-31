const jwt=require('jsonwebtoken');
module.exports= (req, res,next) => {
try {
    const authHeader=req.headers['authorization']
    const token= authHeader && authHeader.split('')
    const decoded = jwt.verify(req.body.token,"Secretin");  
    req.userData=decoded;
    next();
} catch (error) {
    return res.status(401).json({
        message:'Authentication Failed'
    });
}
   
   
};