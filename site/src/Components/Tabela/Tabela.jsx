import React from 'react';
import './Tabela.css';

const Tabela = ({ dados, onExcluirItem, onEditarItem, colunas }) => {
  return (
    <table>
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={coluna}>{coluna}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((usuario) => (
          <tr key={usuario.id}>
            {colunas.map((coluna) => (
              <td key={`${usuario.id}-${coluna}`}>{usuario[coluna]}</td>
            ))}
            <td>
              <button onClick={() => onExcluirItem(usuario.id)}>Excluir</button>
              <button onClick={() => onEditarItem(usuario.id)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
