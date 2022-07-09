import React,{useState} from 'react'

function TextBox(props){
    const [text, setText] = useState('');

    function btnUpperCase(){
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const btnLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const btnClear=()=>{
        let newText=' ';
        setText(newText);
        props.showAlert("Text Box cleared","success");
    }

    const btnCap=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.showAlert("First letter capitalized","success");
    }

    const btnSpace=()=>{
        let newText=text.trim();
        setText(newText);
        props.showAlert("White Space removed","success");
    }

    const btnCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }


    const onChangeHandle = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <form className="my-3">
            <h3 className='mb-3'>{props.heading}</h3>
            <div className="form-group ">
                <textarea className="form-control" value={text} onChange={onChangeHandle} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>

            <button type="button" disabled={text.length===0} onClick={btnUpperCase} className="btn btn-primary my-2 mx-2">Convert to UpperCase</button>
            <button type="button" disabled={text.length===0} onClick={btnLowerCase} className="btn btn-primary my-2 mx-2">Convert to LowerCase</button>
            <button type="button" disabled={text.length===0} onClick={btnCopy} className="btn btn-primary my-2 mx-2">Copy Text</button>
            <button type="button" disabled={text.length===0} onClick={btnCap} className="btn btn-primary my-2 mx-2">Captialize case</button>
            <button type="button" disabled={text.length===0} onClick={btnSpace} className="btn btn-primary my-2 mx-2">Remove Extra Space</button>
            <button type="button" disabled={text.length===0} onClick={btnClear} className="btn btn-primary my-2 mx-2">Clear</button>
            <div className="container my-4">
                <h5>Your text summary</h5>
                <p>No of Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <p>No of character: {text.length}</p>
                <h5>Preview</h5>
                <p>{text.length>0?text:'Nothing to preview!!'}</p>
            </div>
        </form>
        </>
    );
}

export default TextBox;