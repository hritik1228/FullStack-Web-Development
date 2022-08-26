import React from 'react';
import Emoji from './Emoji';
import Meaning from './Meaning';
import Name from './Name';


function Card(props){
    return <div className="term">
    <dt>
    <Emoji emoji={props.emoji}></Emoji>      
    <Name name={props.name}></Name>
    </dt>
    <dd>
     <Meaning meaning={props.meaning}></Meaning>
    </dd>
  </div>
}

export default Card;