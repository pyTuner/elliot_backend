require('dotenv').config();

const database = {
    URL: process.env.DATABASE_URL,
    NAME: process.env.DATABASE_NAME
}

module.exports = {
    PORT: process.env.LOCAL_PORT,
    PORT2: process.env.LOCAL_PORT_SECOND,
    DATABASE: database
}
