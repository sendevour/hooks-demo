import * as React from 'react';

export interface SampleProps {}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      throw new Error();
  }
};

const Sample: React.SFC<SampleProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, [
    'Mumbai',
    'Bengaluru',
    'Delhi',
  ]);

  return (
    <>
      <h4>Sample Component</h4>

      <ul>
        {state.map((c, i) => {
          return <li key={i}>{c}</li>;
        })}
      </ul>

      <button onClick={() => dispatch({ type: 'add', payload: 'Ahmadabad' })}>
        Add City
      </button>
    </>
  );
};

export default Sample;
