import { buildFeedbackPath,extractFeedback } from "../api/feedback";
import { Fragment, useState } from "react";

function FeedbackPage(props){

    const [feedbackData,setFeedbackData]=useState();

    function loadFeedbackHanlder(id){
        fetch(`/api/${id}`).then(response=>response.json())
        .then(data=>{
            setFeedbackData(data.feedback);
        })
    }

    return (
    
    <Fragment>
        {feedbackData && <p>{feedbackData.email}</p>}
    <ul>
        {props.feedbackItems.map(item=> <li key={item.id}>{item.text}<button onClick={loadFeedbackHanlder.bind(null, item.id )} >Show Details</button></li> )}
    </ul>
    </Fragment>
    )
}


export async function getStaticProps(){
    // Don't send HTTP request
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return {
        props:{
            feedbackItems:data,
        }
    }

}

export default FeedbackPage;