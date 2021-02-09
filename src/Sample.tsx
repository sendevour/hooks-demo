import * as React from 'react';
import DemoCl from './DemoCl';
import DemoFn from './DemoFn';

export interface SampleProps {}

export const AppTheme = React.createContext<string>('light');

const Sample: React.SFC<SampleProps> = (props) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <h4>Sample Component</h4>
      <AppTheme.Provider value={theme}>
        <DemoFn />
        <hr />
        <DemoCl />
      </AppTheme.Provider>

      <hr />

      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default Sample;
