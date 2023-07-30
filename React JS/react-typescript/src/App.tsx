import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  // typing an object props
  const personName={
    first:'Hritik',
    last:'Kumar'
  }

  const nameList=[
    {
      first:'John',
      last:'Doe'
    },
    {
      first:'David',
      last:'Wilson'
    },
    {
      first:'David',
      last:'Land'
    }
  ]


  return (
    <div className="App">
      <Greet name="Hritik" mobile={7763845091} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
