import React from 'react';

interface Props {
    children: JSX.Element
};

const Card: React.FC<Props> = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    );
};

export default Card;