import React from 'react';
import Sample from './Sample';

function App() {
  const [flag, setFlag] = React.useState(true);

  return (
    <div className="App">
      <h3>Learning Hooks</h3>

      <hr />

      {flag ? <Sample /> : <h4>Nothing here!</h4>}


      <hr />

      <button onClick={() => setFlag(state => !state)}>Toggle</button>
    </div>
  );
}

export default App;
