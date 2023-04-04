const { sign, verify } = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY_JWT;

const createToken = (payload) => {
    return sign(payload, SECRET_KEY);
}

const verifyToken = (token) => {
    return verify(token, SECRET_KEY);
}

module.exports = {
    createToken,
    verifyToken
}