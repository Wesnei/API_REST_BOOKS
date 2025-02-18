import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.DB_USER)
console.log(process.env.DB_HOST)


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.on("connect", () => {
    console.log("Conexão estabelecida com o banco de dados");
});

export default pool;
