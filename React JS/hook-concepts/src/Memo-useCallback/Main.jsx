import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';
import './Main.css';
import { useCallback } from 'react';

function Main() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* memo checks for the new value it gets and copmpare to the previos value if it change then only Demo component gets re executed */}
      <Demo show={false}/>
      {/* Primitive VS Reference Values : Since array,object and function are reference value so each time components gets executed it creates a new function because of which button component gets re executed[two function even if they have same content but they are not equal in JS]-It can be solved by useCallback hook to save a function and need to be executed each time when the component gets reexecuted */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default Main;