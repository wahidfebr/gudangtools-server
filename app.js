if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;

const whitelist = [
    'http://localhost:8080',
    undefined, // whitelist postman and thunder client
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            throw { name: "cors_not_allowed" };
        }
    }
}

app.use(cors(corsOptions));
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`gudangtools server listening on port ${port}`);
})