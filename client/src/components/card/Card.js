import React from 'react';
import styles from "./card.module.css";

const Card = ({image, name, continent}) => {
    
    return (
        <div className={styles.container}>
            <img className={styles.imagen} src={image[0]} alt={name} />
            <h4>{name}</h4>
            <h4>{continent}</h4>
        </div>
    )
}

export default Card;