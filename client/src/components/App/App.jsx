import React, { useState, useEffect, useContext } from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import List from '../List/List.jsx';
import Store from '../../globalState/Store.js';

const App = () => {


  useEffect(() => console.log('App mounted!'), []);

    return (
      <Store>
        <Toggle />
        <List />
      </Store>
    );

}

export default App;