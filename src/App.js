import React, { useState } from 'react';
import '../public/index.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="hello">Hello React!</div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
