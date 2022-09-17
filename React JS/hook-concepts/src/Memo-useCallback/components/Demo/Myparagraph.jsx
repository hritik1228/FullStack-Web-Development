import React from 'react';

const Myparagraph = (props) => {
  console.log('Myparagraph RUNNING');
  return <p>{props.children}</p>;
};

export default Myparagraph;