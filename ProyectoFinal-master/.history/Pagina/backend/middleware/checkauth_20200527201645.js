const jwt=require('jsonwebtoken');
module.exports= (req, res,next) => {
try {
    
} catch (error) {
    
}
    const decoded = jwt.verify(req.body.token,"Secretin")
    next();
};