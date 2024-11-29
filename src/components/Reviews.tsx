import React from 'react';
import './Reviews.css';

interface Feedback {
  name: string;
  comment: string;
}

const Reviews: React.FC = () => {
  const feedbacks: Feedback[] = [
    {
      name: 'Олександр П.',
      comment: 'Класна машина! Їздив на вихідних – дуже задоволений.',
    },
    {
      name: 'Марія С.',
      comment: 'Не дорого і якісно. Обслуговування на високому рівні!',
    },
    {
      name: 'Іван К.',
      comment: 'Все супер! Машина комфортна, персонал привітний. Буду звертатись ще!',
    },
    {
      name: 'Ольга М.',
      comment: 'Ціни приємні, а якість послуг просто відмінна. Рекомендую всім!',
    },
  ];

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Відгуки</h1>
      <p className="reviews-description">
        Наші клієнти залишають позитивні відгуки про наші послуги.
      </p>
      <div className="reviews-list">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="review-card">
            <h3 className="review-name">{feedback.name}</h3>
            <p className="review-comment">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
