import React, { useCallback } from 'react';

import { MdDelete } from 'react-icons/md';

import { Container, List, Item } from './styles';

import { useListSalva } from '../../contexts/listSalva';

const ListSalva: React.FC = () => {
  /**
   * Hooks
   */
  const {
    itens,
    alterarNome,
    alterarObservacao,
    alterarProximaLigacao,
    deletarItem,
  } = useListSalva();

  /**
   * Callbacks
   */
  const handleDelete = useCallback(
    (numero: string) => {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm('Deseja realmente excluir?');
      if (confirm) {
        deletarItem(numero);
      }
    },
    [deletarItem],
  );

  /**
   * Returns
   */
  return (
    <Container>
      <List>
        {itens.map(item => (
          <Item key={item.numero}>
            <label htmlFor={`nome${item.numero}`}>
              Nome
              <input
                id={`nome${item.numero}`}
                type="text"
                value={item.nome}
                onChange={e => alterarNome(item.numero, e.target.value)}
              />
            </label>
            <label htmlFor={`numero${item.numero}`}>
              Número
              <input
                disabled
                id={`numero${item.numero}`}
                type="text"
                value={item.numero}
              />
            </label>

            <label htmlFor={`ligacao${item.numero}`}>
              Proxima ligação
              <input
                type="date"
                id={`ligacao${item.numero}`}
                value={item.proximaLigacao}
                onChange={e => {
                  alterarProximaLigacao(item.numero, e.target.value);
                }}
              />
            </label>
            <label htmlFor={`observacao${item.numero}`}>
              Observação
              <textarea
                id={`observacao${item.numero}`}
                value={item.observacao}
                onChange={e => alterarObservacao(item.numero, e.target.value)}
              />
            </label>

            <div>
              <a href={item.telLink}>Discador</a>
              <a href={item.whatsappLink}>Whatsapp</a>
            </div>

            <button type="button" onClick={() => handleDelete(item.numero)}>
              <MdDelete size={22} color="#660066" />
            </button>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ListSalva;
