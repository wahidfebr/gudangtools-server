const axios = require("axios");
const baseUrl = "https://api.pwnedpasswords.com";

const isPasswordPwned = async (suffix, prefix) => {
    try {
        // * save result to isPwned
        const isPwned = {
            status: false,
            count: 0
        }

        // * request data from pwnedpasswords
        const { data } = await axios.get(baseUrl + "/range/" + prefix.toUpperCase());

        // * loop through data response string to check suffix and count
        data.split("\n").find(el => {
            const [dataHash, count] = el.split(':');
            if (dataHash.toUpperCase() === suffix.toUpperCase()) {
                isPwned.status = true;
                isPwned.count = +count;
                return isPwned
            }
        })

        return isPwned;
    } catch (error) {
        error.SERVICES_ERROR = "PwnedService: isPasswordPwned";
        throw error;
    }
}

module.exports = {
    isPasswordPwned
}