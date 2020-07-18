import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import List from '../List/List.jsx';

const App = () => {

  const [toggle, setToggle] = useState(true);
  const [list, updateList] = useState(['a', 'b', 'c']);

    return (
      <div>
        <Toggle
          toggle={toggle}
          onToggleList={() => (setToggle(!toggle))}
        />
        {toggle && <List list={list} />}
      </div>
    );

}

export default App;