import React,{useContext} from 'react'
import Child3 from './Child3'
import { FirstName, LastName } from "./Parent";


const Child2=()=>{
    const fName = useContext(FirstName);
    const lName=useContext(LastName);

    return <h1>Hello {fName} {lName}</h1>

}

export default Child2