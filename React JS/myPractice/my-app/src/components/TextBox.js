import React,{useState} from 'react'

function TextBox(props){
    const [text, setText] = useState('Enter text here');

    function btnUpperCase(){
        let newText=text.toUpperCase();
        setText(newText;
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
            <button type="button" onClick={btnUpperCase} className="btn btn-primary">Convert to UpperCase</button>
        </form>
        </>
    );
}

export default TextBox;