module.exports = {
    isPasswordPwned: require("./PwnedService").isPasswordPwned,
    fetchCompanies: require("./GoApiService").fetchCompanies,
    getStockPriceByTickers: require("./GoApiService").getStockPriceByTickers,
}