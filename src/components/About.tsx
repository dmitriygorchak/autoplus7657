import React from 'react';

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Оренда авто для будь-яких потреб</h1>

      <div style={styles.imageContainer}>
        { "" }
        <img 
          src="https://th.bing.com/th/id/OIP.Q6xrej45XkPauLQp22UG2wHaEK?rs=1&pid=ImgDetMain" 
          alt="Автомобіль для оренди" 
          style={styles.image} 
        />
      </div>

      <p style={styles.text}>
        Вітаємо у нашій компанії з оренди автомобілів! Ми пропонуємо широкий вибір авто: 
        від компактних міських машин до розкішних позашляховиків. Орендуйте авто легко, швидко та зручно.
      </p>

      <h2 style={styles.subtitle}>Чому обирають нас?</h2>
      <ul style={styles.list}>
        <li>✅ Великий вибір автомобілів для будь-якого бюджету</li>
        <li>✅ Прозорі тарифи без прихованих платежів</li>
        <li>✅ Цілодобова підтримка клієнтів</li>
        <li>✅ Швидке оформлення документів</li>
      </ul>

      <h2 style={styles.subtitle}>Як орендувати авто?</h2>
      <ol style={styles.list}>
        <li>1️⃣ Оберіть автомобіль на нашому сайті.</li>
        <li>2️⃣ Залиште заявку онлайн або зателефонуйте.</li>
        <li>3️⃣ Отримайте підтвердження та заберіть авто в зручний час.</li>
      </ol>

      <p style={styles.contact}>
        Для бронювання телефонуйте: <strong style={styles.phone}>+38 (012) 345-67-89</strong>
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center' as const,
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  imageContainer: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  text: {
    color: '#555',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#444',
    fontSize: '1.5rem',
    margin: '20px 0 10px',
  },
  list: {
    color: '#555',
    fontSize: '1.1rem',
    marginLeft: '20px',
    marginBottom: '20px',
  },
  contact: {
    textAlign: 'center' as const,
    fontSize: '1.2rem',
    color: '#333',
  },
  phone: {
    color: '#007BFF',
  },
};

export default About;
