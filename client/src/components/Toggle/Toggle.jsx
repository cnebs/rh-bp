import React, { useMemo } from 'react';
import { useStore } from '../../globalState/Store.js';

const Toggle = () => {

  const [state, dispatch] = useStore();
  
  return useMemo( () => {
    console.log('Toggle re-render')
    return (
      <button type="button" onClick={() => {dispatch({ type: 'TOGGLE_LIST', payload: !state.toggle})} }>
        {state.toggle ? 'Hide' : 'Show'}
      </button>
    );
  }, [state.toggle]);
};

export default Toggle;