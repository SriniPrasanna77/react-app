import React from 'react';
import Card from './Card';

const Cards = ({robots}) => {
    const cardsArray = robots.map((item,i) => {
        return <Card key={i} uname={item.username} name={item.name} email={item.email} />;
    });
    return (
        <>
            {cardsArray}
        </>
    )
}

export default Cards;