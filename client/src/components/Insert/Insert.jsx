import React, {useContext, useState} from 'react';
import { Context } from '../../globalState/Store.js';


const Insert = () => {

  const [state, dispatch] = useContext(Context);
  const [insertion, insert] = useState('')

  const handleOnChange = (e) => {
    insert(e.target.value);
  }

  return (
    state.toggle ?
      <span>
        <input type="text" onChange={handleOnChange} />
        <button type="button" onClick={() => {dispatch({ type: 'ADD_LIST_ITEM', payload: insertion })}}>
          Add Item
        </button>
      </span>
      : <></>
  )
}

export default Insert;