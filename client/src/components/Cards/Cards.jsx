import React, { useState } from 'react';
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardMouseEnter = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className={styles.cardsWrapper}>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
          className={`${styles.card} ${char.id === activeCard ? styles.active : ''}`}
          onMouseEnter={() => handleCardMouseEnter(char.id)}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}


