import React, { useEffect } from 'react';
import Header from '../Header/Header.jsx';
import Toggle from '../Toggle/Toggle.jsx';
import Insert from '../Insert/Insert.jsx';
import List from '../List/List.jsx';
import { Store } from '../../globalState/Store.js';

const App = () => {

  useEffect( () => console.log('App mounted'), [] );

    return (
      <Store>
        <Header />
        <Toggle />
        <Insert />
        <List />
      </Store>
    );

}

export default App;