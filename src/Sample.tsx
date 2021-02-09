import * as React from 'react';

export interface SampleProps {}

const Sample: React.SFC<SampleProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = 'Good to see you here!';
      inputRef.current.select();
    }
  }, []);

  return (
    <>
      <h4>Sample Component</h4>
      <input type='text' ref={inputRef} />
    </>
  );
};

export default Sample;
