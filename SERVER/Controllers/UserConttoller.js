
const user = require('../models/user')

class UserController {
        static async register(req,res,next){
            try {
                const {username,email,password} = req.body
                const user = await User.create({username : username ,email : email,password : password})
                res.status(201).json({
                    message: 'Register Success',
                    user
                })
                
            } catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
            }
        }
        static async login(req,res,next){
            try {
                const {username,password} = req.body
                const user = await User.findOne({where : {username : username}})
                if(!user){
                    res.status(404).json({
                        message: 'User not found'
                    })
                }
                const isValid = bycrypt.compareSync(password,user.password)
                if(!isValid){
                    res.status(401).json({
                        message: 'Invalid password'
                    })
                }
                const token = jwt.sign({id : user.id},process.env.JWT_SECRET)
                res.status(200).json({
                    message: 'Login Success',
                    token
                })
            } catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
            }
        }
}
module.exports = UserController