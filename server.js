const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const productRoutes = require('./src/routes/productRoutes');

app.use(express.json());

app.use('/api/products', productRoutes);


sequelize.sync({ force: false }) // force: true apaga e recria tabelas (cuidado!)
  .then(() => console.log('Banco de dados conectado!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));
