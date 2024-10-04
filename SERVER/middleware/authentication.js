const {verifyToken} = require('../helper/jwt')
const {User} = require('../models')

const authentication = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            throw { name: 'InvalidToken' };
        }

        const [bearer, token] = bearerToken.split(' ');
        if (!bearer || !token || bearer !== 'Bearer') {
            throw { name: 'InvalidToken' };
        }

        const decode = verifyToken(token);
        const user = await User.findByPk(decode.id);
        if (!user) {
            throw { name: 'InvalidToken' };
        }       

        req.user = {
            id: user.id
        };

        next()
    } catch (error) {
        next(error);
    }
};
module.exports = authentication