import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const [usersList,setUsersList]=useState([]);

  const onAddUserHandler=(uName,uAge)=>{

    if(uName.length>1 && uAge>1){
      setUsersList((prevUserList)=>{
        return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
      })
    }
    else{
      return;
    }
  }

  return (
    <div>
        <AddUser onAddUser={onAddUserHandler}/>
        <UserList users={usersList}/>
    </div>
  );
}

export default App;
