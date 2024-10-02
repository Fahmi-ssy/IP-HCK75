
const {User} = require('../models')    
const {comparePassword} = require('../helper/bcrypt')
const {createToken} = require('../helper/jwt')


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
                console.log("....", error);
                res.status(500).json({
                    message: 'Internal Server Error',
                    error
                })
            }
        }
        static async login(req,res,next){
            try {
                const {email,password} = req.body
                 
                if(!email){
                    res.status(404).json({
                        message: 'Email not found'
                    })
                }
                if (!password){
                    res.status(404).json({
                        message: 'Password not found'
                    })
                    
                }
                const user = await User.findOne({where : {email : email}})
                if (!user){
                    res.status(404).json({
                        message: 'Email not found'
                    })               
                    
                }
                const validPassword = comparePassword(password,user.password)
                if (!validPassword){
                    res.status(404).json({
                        message: 'Password not found'
                    })
                }
                const payload = {
                    id: user.id,
                    email: user.email
                }
                const access_token = createToken(payload)
                res.json({ access_token   })

                
                
            } catch (error) {
                next(error)
            }
        }
}
module.exports = UserController