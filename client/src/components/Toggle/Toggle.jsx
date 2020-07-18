import React, { useContext } from 'react';
import { Context } from '../../globalState/Store.js';

const Toggle = () => {

  const [state, dispatch] = useContext(Context);

  return (
    <button type="button" onClick={() => {dispatch({ type: 'TOGGLE_LIST', payload: !state.toggle})} }>
      {state.toggle ? 'Hide' : 'Show'}
    </button>
  );
};

export default Toggle;