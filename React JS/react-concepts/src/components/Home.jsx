import React from 'react'

function Home(props){
    console.log("Home",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png" style={{width:"40px"}}/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;