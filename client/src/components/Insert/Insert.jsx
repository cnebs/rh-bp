import React, {useState, useMemo} from 'react';
import { useStore } from '../../globalState/Store.js';
import { useList } from '../../globalState/StoreAPI.js';


const Insert = () => {

  const [ { toggle } ] = useStore(),
        { addListItem } = useList(),
        [ insertion, insert ] = useState('');

  const handleOnChange = (e) => {
    insert(e.target.value);
  }

  return useMemo( () => {
    console.log('Insert re-render')
    return (
      toggle ?
        <div>
          <input type="text" onChange={handleOnChange} />
          <button type="button" onClick={() => {console.log(insertion); addListItem(insertion)}}>
            Add Item
          </button>
        </div>
        : <></>
    );
  }, [toggle, insertion])
}

export default Insert;