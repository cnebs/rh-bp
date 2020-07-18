import React from 'react';

const Toggle = ({ toggle, onToggleList }) => (
  <button type="button" onClick={onToggleList}>
    {toggle ? 'Hide' : 'Show'}
  </button>
);

export default Toggle;