import React,{useState} from 'react'

function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black',
    //     border:'1px solid white'
    // }
    // );
    
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#042743':'white',
        border:props.mode==='dark'?'0.5px solid white':'0.5px solid black',
        borderRadius:'5px'
    }


  return (
    <div className="container my-3">
        <h1>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong> Our Mission</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        You don’t need to outright say, “our mission is to help you,” but you should convey the mission of your business in your About Us copy. This is key for attracting talent, as well as leads that have Corporate Social Responsibility (CSR) goals.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong> Our History </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                    Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.

                    Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Our Services</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.

                    Highlight the benefits and showcase what you do (and why it is unique).
                    </div>
                    </div>
                </div>
            </div>

    
    </div>
  );
}

export default About;
