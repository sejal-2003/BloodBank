//decrypt token
const JWT = require("jsonwebtoken")

module.exports = async (req,res,next) =>{
    try {
        const token = req.headers["Authorization"].split(" ")[1];
        //console.log("Received token:", token);
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
          //console.log("Decoded token:", decode);
          if (err) {
            //console.error("JWT Verification Error:", err);
            return res.status(401).send({
              success: false,
              message: "Auth Failed",
            });
          } else {
            req.body.userId = decode.userId;
            next();
          }
        });
      } catch (error) {
        console.log(error);
        return res.status(401).send({
          success: false,
          error,
          message: "Auth Failed",
        });
      }
    };