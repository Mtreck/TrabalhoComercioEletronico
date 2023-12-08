// controller.js
const ProdutoModel = require('../models/produtoModel');

const salvarProduto = (req, res) => {
  const{ Login, Senha, Nome, Email, Ano_Nascimento } = req.body;

  // Chame o método salvarProduto do modelo
  ProdutoModel.salvarProduto(Login, Senha, Nome, Email, Ano_Nascimento, (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar o usuario:', err);
      return res.status(500).json({ error: 'Erro ao salvar o usuario' });
    }
    res.status(200).json({ message: 'usuario salvo com sucesso', resultado });
  });
};


const atualizarProduto = (req, res) => {
  const { id, Login, Senha, Nome, Email, Ano_Nascimento } = req.body;

  ProdutoModel.atualizarProduto (id, Login, Senha, Nome, Email, Ano_Nascimento, (err, resultado) => {
    if (err) {
      console.error('Erro ao atualizar o usuario:', err);
      return res.status(500).json({ error: 'Erro ao atualizar o usuario' });
    }
    res.status(200).json({ message: 'usuario atualizado com sucesso', resultado });
  });
};
const excluirProduto = (req, res) => {
  const { id } = req.params;

  ProdutoModel.excluirProduto(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao excluir o produto:', err);
      return res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
    res.status(200).json({ message: 'Produto excluído com sucesso', resultado });
  });
};

const listarProdutoId = (req, res) => {
  const { id } = req.params;

  ProdutoModel.listarProdutoId(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao Buscar usuario:', err);
      return res.status(500).json({ error: 'Erro ao Buscar usuario' });
    }
    res.status(200).json({ message: 'Usuario encontrado', resultado });
  });
};

const listarProdutos = (req, res) => {
  ProdutoModel.listarProdutos((err, resultados) => {
    if (err) {
      console.error('Erro ao listar os ususarios:', err);
      return res.status(500).json({ error: 'Erro ao listar os usuarios' });
    }
    res.status(200).json(resultados);
  });
};

module.exports = { salvarProduto, atualizarProduto, excluirProduto, listarProdutos, listarProdutoId };

