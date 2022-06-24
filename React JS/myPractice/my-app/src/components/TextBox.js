import React,{useState} from 'react'

function TextBox(props){
    const [text, setText] = useState('');

    function btnUpperCase(){
        let newText=text.toUpperCase();
        setText(newText);
    }

    const btnLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const btnClear=()=>{
        let newText=' ';
        setText(newText);
    }

    const btnCap=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
    }

    const btnSpace=()=>{
        let newText=text.trim();
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
                <textarea className="form-control" value={text} onChange={onChangeHandle} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>

            <button type="button" onClick={btnUpperCase} className="btn btn-primary my-2 mx-2">Convert to UpperCase</button>
            <button type="button" onClick={btnLowerCase} className="btn btn-primary my-2 mx-2">Convert to LowerCase</button>
            <button type="button" onClick={btnCap} className="btn btn-primary my-2 mx-2">Captialize case</button>
            <button type="button" onClick={btnSpace} className="btn btn-primary my-2 mx-2">Remove Extra Space</button>
            <button type="button" onClick={btnClear} className="btn btn-primary my-2 mx-2">Clear</button>
            <div className="container my-4">
                <h5>Your text summary</h5>
                <p>No of Words: {text.split(" ").length}</p>
                <p>No of character: {text.length}</p>
                <h5>Preview</h5>
                <p>{text.length>0?text:'Enter  something to preview here!!'}</p>
            </div>
        </form>
        </>
    );
}

export default TextBox;