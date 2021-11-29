import React from 'react';
import './style.css';

function App(props) {
  return (
    <>
      <h1 style={{ background: props.color1 }}>Tomato</h1>
      <h1 style={{ color: props.color2 }}>Hello World</h1>
      <h1 style={{ border: '1px solid violet' }}>Hello World</h1>
      <h1 style={{ background: props.color4 }}>...</h1>
    </>
  );
}
export default App;
