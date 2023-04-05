module.exports = {
    ErrorHandler: require("./ErrorHandler"),
    authentication: require("./AuthHandler").authentication,
    authorizePremium: require("./AuthHandler").authorizePremium,
}