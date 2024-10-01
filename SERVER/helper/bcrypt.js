const bycryptcrypt = require('bcryptjs')

let hashPassword = (password) => {
    const salt = bycryptcrypt.genSaltSync(10)
    const hash = bycryptcrypt.hashSync(password,salt)
    return hash
}
let comparePassword = (password,db_password) => {
    
    let validPassword = bycryptcrypt.compareSync(password,db_password)
    return validPassword
}
module.exports = {
    hashPassword,
    comparePassword
}
