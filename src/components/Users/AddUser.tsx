import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

interface Props {
    onAddUser: (username: string, userAge: string)=> void
};

const AddUser: React.FC<Props> = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if(+enteredAge < 1){
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (e: React.FormEvent) =>{
        setEnteredUsername((e.target as HTMLInputElement).value);
    };

    const ageChangeHandler = (e: React.FormEvent) =>{
        setEnteredAge((e.target as HTMLInputElement).value);
    };

    return (
        <Card>
            <form className='form' onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>

                <label htmlFor='age'>Age</label>
                <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>

                <Button>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;