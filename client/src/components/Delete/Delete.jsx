import React from 'react';
import { useList } from '../../globalState/StoreAPI.js';


const Delete = ({ index }) => {

  const { delListItem } = useList();


  return (
    <button type="button" onClick={ () => delListItem(index)}>
      Complete
    </button>
  )
}

export default Delete;