import React, { Component } from 'react'

export default class ClassComp extends Component{
    constructor(){
        this.state={
            windowWidth:window.innerWidth,
        };
    }

    componentDidMount(){
        // Lifecycle func- When component mounts/Loads
        console.log('The app component loaded');
    }

    componentDidUpdate(prevProps){
        // Lifecycle func - When component props changes
    }

    componentWillUnmount(){
        // Lifecycle func - when component unmounts/cleanup function

    }

    render(){
        return (
            <div className='app'>
                <center>
                    <h1>The useEffect hook</h1>
                    <h2>The window width is :{windowWidth}</h2>
                </center>
            </div>
        );
    }
}