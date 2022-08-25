import React from 'react'
import Avatar from './Avatar';
import Phone from './Phone';
import Email from './Email';

function Card(props){
// console.log(props.image);
return <div>
    
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image}></Avatar>
      </div>
      <div className="bottom">
        <Phone phone={props.phone}></Phone>
        <Email email={props.email}></Email>
      </div>
    </div>
  </div>
}

export default Card;