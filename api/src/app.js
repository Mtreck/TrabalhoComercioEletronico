// app.js
const { app } = require('./config');
const produtoRoutes = require('./routes/produtoRoutes');

app.use('/api/produtos', produtoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js em execução na porta ${PORT}`);
});
