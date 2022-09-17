import React from 'react';
import Myparagraph from './Myparagraph';

const Demo = (props) => {
  console.log('Demo RUNNING');
  return <Myparagraph>{props.show ? 'This is new!' : ''}</Myparagraph>;
};

export default React.memo(Demo);