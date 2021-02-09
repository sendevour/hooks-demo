import * as React from 'react';

export interface SampleProps {}

const Sample: React.SFC<SampleProps> = (props) => {
  const [index, setIndex] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const getCubeFn = React.useCallback(() => {
    return index * index * index;
  }, [index]);

  //   Normal code:
  //   const getCubeFn = () => {
  //     return index * index * index;
  //   };

  //    This value is cached and the function doesn't run
  //    on every render (except for its dependencies)
  const getCubeValue = React.useMemo(
    () => ({
      value: index * index * index,
    }),
    [index]
  );

  //   Normal code:
  //   const computeCube = () => ({
  //     value: index * index * index,
  //   });

  //   const getCubeValue = computeCube();

  React.useEffect(() => {
    console.log('getCubeFn created');
  }, [getCubeFn]);

  React.useEffect(() => {
    console.log('getCubeValue created');
  }, [getCubeValue]);

  return (
    <>
      <h4>
        Sample Component: {getCubeFn()} / {getCubeValue.value}
      </h4>

      <p>Count: {count}</p>

      <hr />

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setIndex(index + 1)}>Increment Index</button>
    </>
  );
};

export default Sample;
