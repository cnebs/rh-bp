import React, {useContext, useState} from 'react';
import { useStore } from '../../globalState/Store.js';


const Delete = ({ index }) => {

  const [state, dispatch] = useStore();


  return (
    <button type="button" onClick={ () => dispatch({ type:  'DELETE_LIST_ITEM', payload: index})}>
      Remove
    </button>
  )
}

export default Delete;