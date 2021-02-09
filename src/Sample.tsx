import * as React from 'react';
import DemoFn from './DemoFn';
import { AppThemeProvider } from './AppTheme';

export interface SampleProps {}

const Sample: React.SFC<SampleProps> = (props) => {
  return (
    <>
      <h4>Sample Component</h4>
      <AppThemeProvider>
        <DemoFn />
      </AppThemeProvider>
    </>
  );
};

export default Sample;
