// produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/salvar-produto', produtoController.salvarProduto);
router.put('/atualizar-produto', produtoController.atualizarProduto);
router.delete('/excluir-produto/:id', produtoController.excluirProduto);
router.get('/listar-produtos', produtoController.listarProdutos);
router.get('/listar-produtos/:id', produtoController.listarProdutoId);


module.exports = router;
