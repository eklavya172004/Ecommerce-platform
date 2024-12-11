import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="md:text-5xl  text-lg font-extrabold text-center text-gray-800 tracking-wide">
      {title}
    </div>
  );
};

export default Title;
