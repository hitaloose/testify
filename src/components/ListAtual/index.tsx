import React, { useState, useCallback, useEffect } from 'react';
import produce from 'immer';

import { MdSave } from 'react-icons/md';
import { Checkbox } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, Form, List, theme } from './styles';

import { useTab } from '../../contexts/tab';
import { useListSalva } from '../../contexts/listSalva';

import ListAtualItem from '../../types/ListAtualItem';
import ListSalvaItem from '../../types/ListSalvaItem';

const ListAtual: React.FC = () => {
  /**
   * States
   */
  const [itens, setItens] = useState<ListAtualItem[]>(
    JSON.parse(localStorage.getItem('listAtual') || '[]'),
  );
  const [numero, setNumero] = useState('');
  const [quantidade, setQuantidade] = useState('');

  /**
   * Hooks
   */
  const { changeTab } = useTab();
  const { addToList } = useListSalva();

  /**
   * Handles
   */
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const quantidadeNumber = Number(quantidade);
      const numeroNumber = Number(numero);
      const novosItens: ListAtualItem[] = [];

      for (let index = 0; index < quantidadeNumber; index += 1) {
        const novoItem = {} as ListAtualItem;
        novoItem.checked = false;
        novoItem.numero = String(numeroNumber + index);
        novoItem.telLink = `tel:${novoItem.numero}`;
        novoItem.whatsappLink = `https://api.whatsapp.com/send?phone=55${novoItem.numero}`;

        novosItens.push(novoItem);
      }

      setNumero('');
      setQuantidade('');
      setItens(novosItens);
    },
    [quantidade, numero],
  );

  const handleClickLink = useCallback(
    (index: number) => {
      setItens(
        produce(itens, draft => {
          draft[index].checked = true;
        }),
      );
    },
    [itens],
  );

  const toggleCheckbox = useCallback(
    (index: number) => {
      setItens(
        produce(itens, draft => {
          draft[index].checked = !draft[index].checked;
        }),
      );
    },
    [itens],
  );

  const handleSalvar = useCallback(
    (numeroSalvar: string) => {
      const novoItemSalva = {} as ListSalvaItem;
      novoItemSalva.numero = numeroSalvar;
      novoItemSalva.telLink = `tel:${numeroSalvar}`;
      novoItemSalva.whatsappLink = `https://api.whatsapp.com/send?phone=55${numeroSalvar}`;

      addToList(novoItemSalva);

      changeTab(1);
    },
    [changeTab, addToList],
  );

  /**
   * Effects
   */
  useEffect(() => {
    localStorage.setItem('listAtual', JSON.stringify(itens));
  }, [itens]);

  /**
   * Returns
   */
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Telefone"
          required
          value={numero}
          onChange={e => setNumero(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          required
          value={quantidade}
          onChange={e => setQuantidade(e.target.value)}
        />
        <button type="submit">Gerar</button>
      </Form>
      <List>
        {itens.map((item, index) => (
          <li key={item.numero}>
            <ThemeProvider theme={theme}>
              <Checkbox
                checked={item.checked}
                onClick={() => toggleCheckbox(index)}
              />
            </ThemeProvider>
            <div>
              <p>{item.numero}</p>
              <a href={item.telLink} onClick={() => handleClickLink(index)}>
                Discador
              </a>
              <a
                onClick={() => handleClickLink(index)}
                href={item.whatsappLink}
              >
                Whatsapp
              </a>
            </div>
            <button type="button" onClick={() => handleSalvar(item.numero)}>
              <MdSave size={22} color="#660066" />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ListAtual;
