// produtoModel.js
const { connection } = require('../config');

class ProdutoModel {
  static salvarProduto(Login, Senha, Nome, Email, Ano_Nascimento, callback) {
    const query = 'INSERT INTO usuario (Login, Senha, Nome, Email, Ano_Nascimento) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [Login, Senha, Nome, Email, Ano_Nascimento], (err, results)=> {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static buscarProdutoPorId(id, callback) {
    const query = 'SELECT * FROM usuario WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Produto não encontrado
      }
      callback(null, results[0]);
    });
  }


  // Outros métodos, como atualizarProduto, excluirProduto, listarProdutos, etc.


  static atualizarProduto(id, Login, Senha, Nome, Email, Ano_Nascimento, callback) {
    const query = 'UPDATE usuario SET Login=?, Senha=?, Nome=?, Email=?, Ano_Nascimento=? WHERE id=?';
    connection.query(query, [Login, Senha, Nome, Email, Ano_Nascimento, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static excluirProduto(id, callback) {
    const query = 'DELETE FROM usuario WHERE id=?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
  
  static listarProdutoId(id, callback) {
    const query = 'SELECT * FROM usuario WHERE id=?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static listarProdutos(callback) {
    const query = 'SELECT * FROM usuario';
    connection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }
  

}

module.exports = ProdutoModel;
