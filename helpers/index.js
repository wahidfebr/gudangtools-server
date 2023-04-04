module.exports = {
    hashPassword: require("./argon2").hashPassword,
    verifyPassword: require("./argon2").verifyPassword,
    createToken: require("./jwt").createToken,
    verifyToken: require("./jwt").verifyToken,
}