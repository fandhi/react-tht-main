import React, {useState} from 'react';

export default function Card({title, image, onclick, onchange}) {
  // const isSelected = selected ? "selected" : "";
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div className={`grid-item card ${selected ? 'card__selected' : ''}`} onClick={handleClick} >
      <div className="ballot__image">
        <img src={image} alt={title} />
      </div>
      <div className="ballot__title">{title}</div>
      <input
        type="checkbox"
        className="ballot__check"
        // checked={}
        onChange={onchange}
      />
    </div>
  );
}
