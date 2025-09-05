import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Counter</h1>
      <div style={{ fontSize: '50px', margin: '20px' }}>{count}</div>
      <div>
        <button onClick={decrease} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>-</button>
        <button onClick={reset} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>Reset</button>
        <button onClick={increase} style={{ fontSize: '20px', padding: '10px 20px', margin: '5px' }}>+</button>
      </div>
    </div>
  );
}

export default App;
