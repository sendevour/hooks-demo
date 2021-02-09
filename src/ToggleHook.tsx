import * as React from 'react';

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isOn, setIsOn] = React.useState(initialState);

  return [isOn, () => setIsOn((s) => !s)];
};
