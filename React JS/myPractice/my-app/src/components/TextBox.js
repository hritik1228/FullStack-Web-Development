import React,{useState} from 'react'

function TextBox(props){
    const [text, setText] = useState('Enter text here');

    function btnUpperCase(){
        let newText=text.toUpperCase();
        setText(newText);
    }

    const btnLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const onChangeHandle = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <form className="my-3">
            <h2>{props.heading}</h2>
            <div className="form-group ">
                <textarea className="form-control" value={text} onChange={onChangeHandle} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={btnUpperCase} className="btn btn-primary mx-2">Convert to UpperCase</button>
            <button type="button" onClick={btnLowerCase} className="btn btn-primary">Convert to LowerCase</button>
            <div className="container my-4">
                <h5>Result</h5>
                <p>No of Words: {text.split(' ').length}</p>
                <p>No of character: {text.length}</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </form>
        </>
    );
}

export default TextBox;