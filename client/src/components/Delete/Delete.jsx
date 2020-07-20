import React, {useContext, useState} from 'react';
import { useList } from '../../globalState/StoreAPI.js';


const Delete = ({ index }) => {

  const { deleteListItem } = useList();


  return (
    <button type="button" onClick={ () => deleteListItem(index)}>
      Remove
    </button>
  )
}

export default Delete;