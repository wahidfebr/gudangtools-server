const { hash, verify, argon2id } = require("argon2");

const hashPassword = (password) => {
    return hash(password, {
        type: argon2id,
        memoryCost: 2 ** 18,
        timeCost: 5,
        parallelism: 4,
        hashLength: 64,
        saltLength: 20,
    });
}

const verifyPassword = (hashedPassword, password) => {
    return verify(hashedPassword, password);
}

module.exports = {
    hashPassword,
    verifyPassword
}