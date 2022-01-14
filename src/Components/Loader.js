import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MutatingDots color="#00BFFF" height={80} width={80} />
    </div>
  );
};
export default Loader;
