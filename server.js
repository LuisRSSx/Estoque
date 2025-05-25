const sequelize = require('./src/config/database');

sequelize.sync({ force: false }) // force: true apaga e recria tabelas (cuidado!)
  .then(() => console.log('Banco de dados conectado!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));