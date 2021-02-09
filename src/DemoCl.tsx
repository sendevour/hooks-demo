import * as React from 'react';
import { AppTheme } from './Sample';

export interface DemoClProps {}

export interface DemoClState {}

class DemoCl extends React.Component<DemoClProps, DemoClState> {
  render() {
    return (
      <>
        <AppTheme.Consumer>
          {(theme) => <h3>Demo Class Component: {theme}</h3>}
        </AppTheme.Consumer>
      </>
    );
  }
}

export default DemoCl;
