import React from 'react';

interface Props {
    children: JSX.Element |string
};

const Button: React.FC<Props> = (props) => {
    return (
        <button type='submit'>
            {props.children}
        </button>
    );
};

export default Button;