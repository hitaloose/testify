import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import produce from 'immer';

import ListSalvaItem from '../types/ListSalvaItem';

interface ListSalvaContextData {
  itens: ListSalvaItem[];
  addToList(item: ListSalvaItem): void;
  alterarNome(numero: string, nome: string): void;
  alterarProximaLigacao(numero: string, proximaLigacao: string): void;
  alterarObservacao(numero: string, observacao: string): void;
  deletarItem(numero: string): void;
}

const ListSalvaContext = createContext({} as ListSalvaContextData);

export const ListSalvaProvider: React.FC = ({ children }) => {
  /**
   * States
   */
  const [itens, setItens] = useState<ListSalvaItem[]>(
    JSON.parse(localStorage.getItem('listSalva') || '[]'),
  );

  /**
   * Callbacks
   */
  const addToList = useCallback(
    (item: ListSalvaItem) => {
      const findItem = itens.find(i => i.numero === item.numero);

      if (!findItem) {
        setItens([item, ...itens]);
      }
    },
    [itens],
  );

  const alterarNome = useCallback(
    (numero: string, nome: string) => {
      setItens(
        produce(itens, draft => {
          const itemIndex = draft.findIndex(i => i.numero === numero);

          if (itemIndex >= 0) {
            draft[itemIndex].nome = nome;
          }
        }),
      );
    },
    [itens],
  );

  const alterarProximaLigacao = useCallback(
    (numero: string, proximaLigacao: string) => {
      setItens(
        produce(itens, draft => {
          const itemIndex = draft.findIndex(i => i.numero === numero);

          if (itemIndex >= 0) {
            draft[itemIndex].proximaLigacao = proximaLigacao;
          }
        }),
      );
    },
    [itens],
  );

  const alterarObservacao = useCallback(
    (numero: string, observacao: string) => {
      setItens(
        produce(itens, draft => {
          const itemIndex = draft.findIndex(i => i.numero === numero);

          if (itemIndex >= 0) {
            draft[itemIndex].observacao = observacao;
          }
        }),
      );
    },
    [itens],
  );

  const deletarItem = useCallback(
    (numero: string) => {
      setItens(
        produce(itens, draft => {
          const itemIndex = draft.findIndex(i => i.numero === numero);

          if (itemIndex >= 0) {
            draft.splice(itemIndex, 1);
          }
        }),
      );
    },
    [itens],
  );

  /**
   * Effects
   */
  useEffect(() => {
    localStorage.setItem('listSalva', JSON.stringify(itens));
  }, [itens]);

  useEffect(() => {
    setItens(prev =>
      prev.sort((a, b) => {
        if (!a.proximaLigacao || !b.proximaLigacao) return -1;
        return +new Date(a.proximaLigacao) - +new Date(b.proximaLigacao);
      }),
    );
  }, []);

  /**
   * Returns
   */
  return (
    <ListSalvaContext.Provider
      value={{
        itens,
        addToList,
        alterarNome,
        alterarObservacao,
        alterarProximaLigacao,
        deletarItem,
      }}
    >
      {children}
    </ListSalvaContext.Provider>
  );
};

export function useListSalva(): ListSalvaContextData {
  const context = useContext(ListSalvaContext);

  return context;
}
