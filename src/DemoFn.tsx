import * as React from 'react';
import { useAppTheme, useSetAppTheme } from './AppTheme';

export interface DemoFnProps {}

const DemoFn: React.SFC<DemoFnProps> = () => {
  const theme = useAppTheme();
  const toggleTheme = useSetAppTheme();

  return (
    <>
      <h3>Demo Function component: {theme}</h3>
      <hr />

      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default DemoFn;
