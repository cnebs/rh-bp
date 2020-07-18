import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

export const initialState = {
  toggle: true,
  list: ['a', 'b', 'c']
};

const Store = ({ children }) => {
	const [ state, dispatch ] = useReducer(Reducer, initialState);
	return (
    <Context.Provider value={[ state, dispatch ]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;