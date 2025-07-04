
import './CategoryCard.css';
import Card from './Card';
import cardData from './cardData';

export default function CategoryCard() {

  const lectureCounts = {
    frontend: 123,
    backend: 234,
    database: 345,
    serverai: 456
  };

  return (
    <div className="grid-container">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          count={lectureCounts[item.category]}
          className={`grid-area-${index + 1}`}
        />
      ))}
    </div>
  );
}
