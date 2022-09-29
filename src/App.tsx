import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

type usersList = {
  name: string,
  age: string
}

const App = () => {

  const [usersList, setUsersList] = useState<usersList[]>([])

  const addUserHandler = (username: string, userAge: string)=>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: userAge}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
};

export default App;