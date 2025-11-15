require('dotenv').config();

const info={
    port:process.env.port||3000,
    DB_NAME:process.env.DB_NAME,
    DB_User:process.env.DB_User,
    DB_PASS:process.env.DB_PASS,
    DB_Url:process.env.DB_URL
}
module.exports={info};