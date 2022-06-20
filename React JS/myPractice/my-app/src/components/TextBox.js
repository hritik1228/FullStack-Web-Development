import React from 'react'

function TextBox(){
    return (
        <>
        <form class="my-4">
            <h2>Enter the text to analyze</h2>
            <div class="form-group ">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Convert to UpperCase</button>
        </form>
        </>
    );
}

export default TextBox;