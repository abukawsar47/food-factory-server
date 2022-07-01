require("dotenv").config();
const dev = {
    app: {
        port: process.env.PORT || 5000,
    },
    db: {
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
    }
}

module.exports = dev;