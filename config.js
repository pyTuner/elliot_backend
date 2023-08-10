const DOT_ENV = require('dotenv')

DOT_ENV.config();

const Database = {
    URL: process.env.DATABASE_URL,
    NAME: process.env.DATABASE_NAME
}

module.exports = {
    ENVIRONMENT:process.env.NODE_ENV,
    PORT: process.env.LOCAL_PORT,
    PORT2: process.env.LOCAL_PORT_SECOND,
    DATABASE: Database
}
