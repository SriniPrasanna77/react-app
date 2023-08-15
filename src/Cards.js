import React from 'react';
import Card from './Card';

const Cards = ({robots}) => {
    const cardsArray = robots.map((item) => {
        return <Card uname={item.uname} name={item.name} email={item.email} />;
    });
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default Cards;