import React from 'react';

function SimpleComponent() {
  return React.createElement('div', null, [
    React.createElement('h1', { key: '1' }, 'Hello, React without JSX!'),
    React.createElement(
      'div',
      { key: '2' },
      'This is a simple component without React component',
    ),
  ]);
}

export default SimpleComponent;
