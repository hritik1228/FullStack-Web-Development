import React from "react";
import Card from './components/Card'
import contacts from './contacts'
import Heading from './components/Heading'

function createCard(contact){
  
  return  <Card 
            key={contact.id}
            name={contact.name}
            image={contact.imgURL}
            phone={contact.phone}
            email={contact.email}>
          </Card>

}

function App() {
  
  return <div> 
  <Heading mainHeading="My Contacts"></Heading>

      {contacts.map(createCard)}

      {/* <Card 
            name={contacts[0].name} 
            image={contacts[0].imgURL} 
            phone={contacts[0].phone} 
            email={contacts[0].email} 
      />

      <Card 
            name={contacts[1].name} 
            image={contacts[1].imgURL} 
            phone={contacts[1].phone} 
            email={contacts[1].email} 
      />

      <Card 
            name={contacts[2].name} 
            image={contacts[2].imgURL} 
            phone={contacts[2].phone} 
            email={contacts[2].email} 
      />   */}
  </div>
}

export default App;
