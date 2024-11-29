import React, { useState } from 'react';

interface Car {
  id: number;
  name: string;
  image: string;
  pricePerDay: number;
  description: string;
  available: boolean;
}

const carsData: Car[] = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image: 'https://th.bing.com/th/id/OIP.8Ec5MYMWHepfXfGW3oelTwHaE8?rs=1&pid=ImgDetMain', 
    pricePerDay: 50,
    description: 'Економічний і надійний седан.',
    available: true,
  },
  {
    id: 2,
    name: 'BMW X5',
    image: 'https://cdn4.riastatic.com/photosnew/auto/photo/bmw_x5__570987464f.webp',
    pricePerDay: 120,
    description: 'Преміальний позашляховик для комфортних подорожей.',
    available: false,
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    image: 'https://cdn4.riastatic.com/photosnew/auto/photo/tesla_model-3__577647219f.webp',
    pricePerDay: 100,
    description: 'Електрокар для екологічних поїздок.',
    available: true,
  },
  {
    id: 4,
    name: 'Audi E-Tron',
    image: 'https://cdn0.riastatic.com/photosnew/auto/photo/audi_e-tron__577515875f.webp',
    pricePerDay: 150,
    description: 'Електрокар для навала.',
    available: true,
  },
  {
    id: 5,
    name: 'Жигуль',
    image: 'https://cdn0.riastatic.com/photosnew/auto/photo/vaz-lada_2105__577762295f.webp',
    pricePerDay: 25,
    description: 'Ну іде і то добре.',
    available: true,
  },
];

const Cars: React.FC = () => {
  const [rentedCar, setRentedCar] = useState<string | null>(null);

  const handleRent = (carName: string) => {
    setRentedCar(carName);
    alert(`Ви орендували автомобіль: ${carName}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Оренда авто</h1>
      <p style={styles.description}>Оберіть автомобіль для своєї подорожі з нашого автопарку.</p>
      <div style={styles.carsGrid}>
        {carsData.map((car) => (
          <div key={car.id} style={styles.carCard}>
            <img src={car.image} alt={car.name} style={styles.carImage} />
            <h2 style={styles.carName}>{car.name}</h2>
            <p style={styles.carDescription}>{car.description}</p>
            <p style={styles.carPrice}>Ціна: ${car.pricePerDay}/день</p>
            <button
              onClick={() => handleRent(car.name)}
              disabled={!car.available}
              style={{
                ...styles.rentButton,
                backgroundColor: car.available ? '#4CAF50' : '#ccc',
                cursor: car.available ? 'pointer' : 'not-allowed',
              }}
            >
              {car.available ? 'Орендувати' : 'Недоступно'}
            </button>
          </div>
        ))}
      </div>
      {rentedCar && <p style={styles.confirmation}>Ви орендували автомобіль: {rentedCar}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  carsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  carCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'left' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  carImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  carName: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  carDescription: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  carPrice: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    marginBottom: '10px',
  },
  rentButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
  },
  confirmation: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#4CAF50',
  },
};

export default Cars;
