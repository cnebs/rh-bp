import React, { createContext, useReducer, useContext } from 'react';
import Reducer from './Reducer';

const StoreContext = createContext();

const initialState = {
  toggle: true,
  list: ['a', 'b', 'c']
};

export const Store = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);
  return (
    <StoreContext.Provider value={[ state, dispatch ]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);