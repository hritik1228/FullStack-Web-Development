import React from 'react';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

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
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, consectetur.</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('Button Clicked',event,id)
      }}></Button>
      <br />
      <br />
      <br />
      <Input value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
    </div>
  );
}

export default App;
