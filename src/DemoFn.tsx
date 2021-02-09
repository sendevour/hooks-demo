import * as React from 'react';
import { AppTheme } from './Sample';

export interface DemoFnProps {}

const DemoFn: React.SFC<DemoFnProps> = () => {
  const theme = React.useContext(AppTheme);

  return (
    <>
      <h3>Demo Function component: {theme}</h3>
    </>
  );
};

export default DemoFn;
