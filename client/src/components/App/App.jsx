import React, { useEffect } from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import List from '../List/List.jsx';
import Insert from '../Insert/Insert.jsx';
import { Store } from '../../globalState/Store.js';

const App = () => {

  useEffect( () => console.log('App mounted'), [] );

    return (
      <Store>

        <h1>globalState demo: todo list</h1>
        <hr />
        <Toggle />
        <Insert />
        <List />

      </Store>
    );

}

export default App;