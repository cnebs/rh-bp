import React, { Component } from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import List from '../List/List.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
      list: ['a', 'b', 'c',]
    };
  }

  onToggleList = () => {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  };

  render() {
    return (
      <div>
        <Toggle
          toggle={this.state.toggle}
          onToggleList={this.onToggleList}
        />
        {this.state.toggle && <List list={this.state.list} />}
      </div>
    );
  }
}