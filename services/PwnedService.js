const axios = require("axios");
const crypto = require('crypto');
const baseUrl = "https://api.pwnedpasswords.com";

const isPasswordPwned = async (password) => {
    try {
        // * save result to isPwned
        const isPwned = {
            status: false,
            count: 0
        }

        // * create initial sha1 for getting prefix and suffix
        const shasum = crypto.createHash('sha1')
            .update(password)
            .digest('hex')
        const prefix = shasum.slice(0, 5).toUpperCase();
        const suffix = shasum.slice(5).toUpperCase();

        // * request data from pwnedpasswords
        const { data } = await axios.get(baseUrl + "/range/" + prefix);

        // * loop through data response string to check suffix and count
        data.split("\n").find(el => {
            const [dataHash, count] = el.split(':');
            if (dataHash.toUpperCase() === suffix) {
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