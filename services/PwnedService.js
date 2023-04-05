const axios = require("axios");
const baseUrl = "https://api.pwnedpasswords.com";

const isPasswordPwned = async (prefix) => {
    try {
        if (!prefix || prefix.length !== 5) throw { name: "BadRequest" };

        // * request data from pwnedpasswords
        const { data } = await axios.get(baseUrl + "/range/" + prefix.toUpperCase());

        return data;
    } catch (error) {
        error.SERVICES_ERROR = "PwnedService: isPasswordPwned";
        throw error;
    }
}

module.exports = {
    isPasswordPwned
}