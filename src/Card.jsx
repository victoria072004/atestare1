import React, { useState } from 'react';
import imagesData from './data/images.json';
import questionImage from './assets/question.svg';
import './index.css';


const mixeazaImaginile = (array) => [...array].sort(() => Math.random() - 0.5);

const Card = () => {
  const [cards, setCards] = useState(mixeazaImaginile([...imagesData, ...imagesData]).slice(0, 20));
  const [cardsIntoarse, setCardsIntoarse] = useState([]);
  const [cardsPotrivite, setCardsPotrivite] = useState([]);

  const cardClick = (index) => {
    if (cardsIntoarse.length === 2 || cardsIntoarse.includes(index) || cardsPotrivite.includes(index)) return;

    const newCardsIntoarse = [...cardsIntoarse, index];
    setCardsIntoarse(newCardsIntoarse);

    if (newCardsIntoarse.length === 2) {
      setTimeout(() => setCardsIntoarse([]), 500);
    }
  };

  return (
    <div className="game">
      <div className="game-grid">
        {cards.map((card, index) => {
          const isFlipped = cardsIntoarse.includes(index) || cardsPotrivite.includes(index);
          return (
            <div
              key={index}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => cardClick(index)}
            >
              <img src={isFlipped ? card.url : questionImage} alt="card" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;

