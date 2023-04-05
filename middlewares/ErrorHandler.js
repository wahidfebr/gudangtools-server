module.exports = (err, req, res, next) => {
    console.log(err);

    let status = 500;
    let message = "Internal Server Error";

    switch (err.name) {
        case "SequelizeForeignKeyConstraintError":
            status = 409;
            message = err.parent.detail;
            break;
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
            status = 400;
            message = err.errors[0].message;
            break;
        case "BadRequest":
            status = 400;
            message = `Input is required`;
            break;
        case "InvalidPrefix":
            status = 400;
            message = `Prefix must be 5 characters`;
            break;
        case "DuplicateItem":
            status = 400;
            message = `Item already exists`;
            break;
        case "Unauthorized":
            status = 401;
            message = `Unauthorized`;
            break;
        case "JsonWebTokenError":
        case "InvalidToken":
            status = 401;
            message = `Token is invalid`;
            break;
        case "CorsForbidden":
            status = 403;
            message = `CORS not allowed`;
            break;
        case "Forbidden":
            status = 403;
            message = `Forbidden access`;
            break;
        case "StockNotFound":
            status = 404;
            message = `Stock not found`;
            break;
    }

    res.status(status).json({ message });
}