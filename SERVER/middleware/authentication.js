const {verifyToken} = require('../helper/jwt')

const authentication = async (req,res,next) => {
    try {
       const bearerToken = req.headers
       const { bearer,token} = bearerToken.authorization.split(' ')
       if(!bearer || !token || bearer !== 'Bearer'){
            throw {name : 'InvalidToken'}

        }        
        const decode = verifyToken(token)
        const user = await User.findByPk(decode.id)
        if (!user){
            throw {name : 'InvalidToken'}
            
        }
        req.user = {
            id : user.id}



    } catch (error) {
       next(error)
    }
}
module.exports = authentication