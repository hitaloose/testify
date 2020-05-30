import React from 'react';

import { Tabs } from './styles';

import { useTab } from '../../contexts/tab';

import ListAtual from '../../components/ListAtual';
import ListSalva from '../../components/ListSalva';

const Dashboard: React.FC = () => {
  /**
   * Tab
   */
  const { tab, changeTab } = useTab();

  /**
   * Returns
   */
  return (
    <>
      <Tabs>
        <button
          type="button"
          data-value={0}
          style={{ background: tab === 0 ? 'rgba(0, 0, 0, 0.2' : '' }}
          onClick={() => changeTab(0)}
        >
          Atual
        </button>
        <button
          type="button"
          data-value={1}
          style={{ background: tab === 1 ? 'rgba(0, 0, 0, 0.2' : '' }}
          onClick={() => changeTab(1)}
        >
          Salvos
        </button>
      </Tabs>
      {tab === 0 && <ListAtual />}
      {tab === 1 && <ListSalva />}
    </>
  );
};

export default Dashboard;
