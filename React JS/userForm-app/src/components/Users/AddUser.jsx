import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser=props=>{

    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler=(event)=>{
        event.preventDefault();

        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {
            setError({
                title:"Invalid Input",
                message:"Please input a valid name and age(non-empty values)."
            });
        }

        if(+enteredAge<1)
        {
            setError({
                title:"Invalid Age",
                message:"Please enter a valid age(>0)"
            });
        }
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler=()=>{
        setError(null);
    }

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUsername} />

                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type="number" onChange={ageChangeHandler} value={enteredAge} />

                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>        
    )

}

export default AddUser;