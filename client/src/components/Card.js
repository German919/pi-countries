import React from 'react';

const Card = ({image, name, continent}) => {
    console.log(image)
    return (
        <div>
            <img src={image[0]} alt={name} />
            <h4>{name}</h4>
            <h4>{continent}</h4>
        </div>
    )
}

export default Card;