require('dotenv').config();
const axios = require("axios");
const baseUrl = "https://api.goapi.id";
const apiVersion = "/v1/stock/idx";
const api_key = process.env.GOAPI_API_KEY;

const fetchCompanies = async () => {
    try {
        // * fetch idx companies list from goapi
        const { data } = await axios.get(baseUrl + apiVersion + "/companies", {
            params: {
                api_key
            }
        });

        return data;
    } catch (error) {
        error.SERVICES_ERROR = "GoApiService: fetchCompanies";
        throw error;
    }
}

module.exports = {
    fetchCompanies
}