import { ProgressBar } from 'react-loader-spinner';
import { forwardRef } from 'react';

const Loader = forwardRef(function Loader(props, ref) {
  return (
    <div ref={ref}>
      <ProgressBar
        visible={props.visible}
        height="80"
        width="80"
        barColor="blueviolet"
        borderColor="white"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
});

export default Loader;