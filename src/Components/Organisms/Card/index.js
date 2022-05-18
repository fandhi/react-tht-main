import React, {useState} from 'react';

export default function Card({data, title, image, selectedItem}) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    selectedItem(data);
    setSelected(!selected);
  };
  return (
    <div className={`grid-item card ${selected ? 'card__selected' : ''}`} onClick={handleClick} >
      <div className="ballot__image">
        <img src={image} alt={title} />
      </div>
      <div className="ballot__title">{title}</div>
    </div>
  );
}
