import React from "react";
import Card from './Card'

import emojipedia from '../emojipedia'

function createCard(content){
        return <Card 
            key={content.id}
            emoji={content.emoji}
            name={content.name}
            meaning={content.meaning}>
        </Card>
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      
      <dl className="dictionary">
        {emojipedia.map(createCard)}

        {/* <Card 
            emoji={emojipedia[0].emoji}
            name={emojipedia[0].name}
            meaning={emojipedia[0].meaning}>
        </Card>

        <Card 
            emoji={emojipedia[1].emoji}
            name={emojipedia[1].name}
            meaning={emojipedia[1].meaning}>
        </Card>

        <Card 
            emoji={emojipedia[2].emoji}
            name={emojipedia[2].name}
            meaning={emojipedia[2].meaning}>
        </Card> */}
        
      </dl>
    </div>
  );
}

export default App;
