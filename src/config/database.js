const { Sequelize } = require('sequelize');
require ('dotenv').config();

const sequelize = new Sequelize (
    process.env.DB_NAME, // Nome do banco
    process.env.DB_USER, // Usuário
    process.env.DB_PASSWORD, // Senha 
    {
        host:process.env.DB_HOST,
        dialect:'postgres', // Altera para 'mysql' se necessário
        port: process.env.DB_PORT,
        logging:false, // Desativa logs do SQL no console
    }
);

module.exports = sequelize;