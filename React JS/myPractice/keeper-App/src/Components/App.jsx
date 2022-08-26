import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';



function App(){
    return (
        <div>
            <Heading></Heading>

            {notes.map((value)=>{
                return <Note 
                key={value.key}
                title={value.title}
                content={value.content}>
            </Note>
            })}

            {/* <Note 
                key={notes[0].key}
                title={notes[0].title}
                content={notes[0].content}>
            </Note>

            <Note 
                key={notes[1].key}
                title={notes[1].title}
                content={notes[1].content}>
            </Note>

            <Note 
                key={notes[2].key}
                title={notes[2].title}
                content={notes[2].content}>
            </Note>

            <Note 
                key={notes[3].key}
                title={notes[3].title}
                content={notes[3].content}>
            </Note> */}
            <Footer></Footer>    
        </div>
    );
}

export default App;