import { useRef, useState } from "react";
function HomePage() {

  const emailInputRef=useRef();
  const feedbackInputRef=useRef();

  const [feedbackItems,setFeedbackItems]=useState()

  function submitFormHandler(e){
    e.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    const enteredFeedback=feedbackInputRef.current.value;
    // console.log(enteredEmail,enteredFeedback)

    const reqBody={email:enteredEmail,text:enteredFeedback};

    fetch('/api/feedback',{
      method:'POST',
      body: JSON.stringify(reqBody),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
  }

  function loadFeedbackHanlder(){
    fetch('/api/feedback')
    .then((response)=>response.json())
    .then((data)=>setFeedbackItems(data.feedback))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback Address</label>
          <textarea id="feedback" cols="30" rows="10" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />

    <button onClick={loadFeedbackHanlder}>Load Feedback</button>

    <ul>
      {feedbackItems?.map(item=> <li key={item.id}>{item.text}</li> )}
    </ul>

    </div>
  );
}

export default HomePage;
