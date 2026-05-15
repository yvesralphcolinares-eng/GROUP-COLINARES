import { useState } from 'react';


function Activity2() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <h1>Counter Activity</h1>
      <h2>Current Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add (+1)
      </button>

      <button onClick={() => setCount(count + 5)}>
        Add (+5)
      </button>

      <button onClick={() => setCount(count - 1)}>
        Subtract (-1)
      </button>

      <button onClick={() => setCount(count - 5)}>
        Subtract (-5)
      </button>

      <button onClick={() => setCount(0)}>
        Reset to 0
      </button>
    </>
  );
}

export default Activity2;