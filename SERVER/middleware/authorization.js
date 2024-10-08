const {User} = require('../models')

const authorization = async (req,res,next) => {
    try {       
        
        const userId = await User.findByPk(req.user.id)
        if(!userId){
            throw {name: 'Unauthorized'}
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = authorization