import React, { useContext, useMemo } from 'react';
import { Context } from '../../globalState/Store.js';

const Toggle = () => {

  const [state, dispatch] = useContext(Context);
  
  return useMemo( () => {
    console.log('Toggle updated')
    return (
      <button type="button" onClick={() => {dispatch({ type: 'TOGGLE_LIST', payload: !state.toggle})} }>
        {state.toggle ? 'Hide' : 'Show'}
      </button>
    );
  }, [state.toggle]);
};

export default Toggle;