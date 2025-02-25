const jwt = require("jsonwebtoken")
const promisify = require("util").promisify

const isAuthenticated = (req,res,next) => {
    const token = req.cookies.token
    if(!token || token === null){
        return res.send("please login")
    }
    //else block
    jwt.verify(token,process.env.SECRET, async (err,result)=>{
        if(err){
            res.send("Invalid token")
        }else{
          const data = await User.findById(result.userId)
          if(!data){
            res.send("Invalid userID in the token")
          }else{
            req.userId = result.userId
            next()
          }
        }
    })
   
}
module.exports = isAuthenticated