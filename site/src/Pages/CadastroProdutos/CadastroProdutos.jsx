import React, { useState, useEffect } from 'react';
import './CadastroProdutos.css';
import Formulario from '../../components/Formulario';
import api from '../../services/api';
import Tabela from '../../Components/Tabela';

const CadastroProduto = () => {
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState(null);


  const listaForm = [
    { nome: 'Login', label: 'Login', tipo: 'text' },
    { nome: 'Senha', label: 'Senha', tipo: 'password' },
    { nome: 'confirmarSenha', label: 'Confirmar Senha', tipo: 'password' },
    { nome: 'Nome', label: 'Nome', tipo: 'text' },
    { nome: 'Email', label: 'E-mail', tipo: 'email' },
    { nome: 'Ano_Nascimento', label: 'Ano de Nascimento', tipo: 'number' },
  ];

  const colunasProdutos = ['id', 'Login', 'Nome', 'Email', 'Ano_Nascimento'];


  
  const enviarFormulario = async (dadosDoFormulario) => {
    try {
      await api.gravarProduto(dadosDoFormulario)

      setMensagem('Usuario salvo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar o usuario:', error.message);
      setMensagem('Erro ao salvar o usuario');
    }
  };

  const editarFormulario = async (dadosDoFormulario) => {
    try {
      await api.atualizarProduto(dadosDoFormulario)

      setMensagem('Usuario editado com sucesso');
    } catch (error) {
      console.error('Erro ao editar o usuario:', error.message);
      setMensagem('Erro ao editar o usuario');
    }
  };


  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await api.getProdutos();
        setProdutos(dados);
      } catch (error) {
        console.error('Erro ao carregar os usuarios:', error.message);
      }
    };

    carregarProdutos();
  }, []);

  const excluirProduto = async (id) => {
    try {
      await api.excluirProduto(id);
      const novaLista = produtos.filter((usuario) => usuario.id !== id);
      setProdutos(novaLista);
    } catch (error) {
      console.error('Erro ao excluir o usuario:', error.message);
    }
  };

  const editarProduto = async (id) => {
    try {
      const produtoSelecionado = await api.buscarProdutoPorId(id);
      setItemSelecionado(produtoSelecionado);
      console.log(itemSelecionado)
    } catch (error) {
      console.error('Erro ao carregar dados do usuario para edição:', error.message);
    }
  };
  

  return (
    <div className="classeCSS">
      <h1>Cadastro de Produto</h1>
      <Formulario 
        campos={listaForm} 
        onSubmit={enviarFormulario} 
        itemSelecionado={itemSelecionado}
        onUpdate={editarFormulario}/>
      {mensagem && <p>{mensagem}</p>}
   
    <h2>Produtos Cadastrados</h2>
      <Tabela
        dados={produtos}
        onExcluirItem={excluirProduto}
        onEditarItem={editarProduto}
        colunas={colunasProdutos}
      />
    </div>
  );
};

export default CadastroProduto;
