import React from 'react';
import Card from '../UI/Card';

interface Props {
    users: {name: string, age: string}[]
};

const UsersList: React.FC<Props> = (props) => {
    return (
        <Card>
        <ul>
            {props.users.map((user) => {
                return (
                    <li>{user.name} ({user.age} years old)</li>
                )
            })}
        </ul>
        </Card>
    );
};

export default UsersList;