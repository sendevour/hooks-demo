import * as React from 'react';
import { useToggle } from './ToggleHook';

export interface SampleProps {}

const Sample: React.SFC<SampleProps> = (props) => {
  const [status, changeStatus] = useToggle(false);

  const toggle = () => {
    changeStatus();
  };

  return (
    <>
      <h4>Sample Component: Status: {status ? 'ON' : 'OFF'}</h4>

      <button onClick={toggle}>Change Status</button>
    </>
  );
};

export default Sample;
