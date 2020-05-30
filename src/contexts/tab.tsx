import React, { createContext, useState, useCallback, useContext } from 'react';

interface TabContextData {
  changeTab(newTab: 0 | 1): void;
  tab: number;
}

const TabContext = createContext({} as TabContextData);

export const TabProvider: React.FC = ({ children }) => {
  /**
   * States
   */
  const [tab, setTab] = useState(0);

  /**
   * Callback
   */
  const changeTab = useCallback((newTab: 0 | 1) => {
    setTab(newTab);
  }, []);

  /**
   * Returns
   */
  return (
    <TabContext.Provider value={{ tab, changeTab }}>
      {children}
    </TabContext.Provider>
  );
};

export function useTab(): TabContextData {
  const context = useContext(TabContext);

  return context;
}
