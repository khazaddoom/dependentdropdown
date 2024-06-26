import { useState, createElement, ReactElement } from 'react';
import '../ui/CheckboxList.css';

const CheckboxList = ({ items }): ReactElement => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleToggle = (item) => {
    const updatedCheckedItems = checkedItems.includes(item)
      ? checkedItems.filter(i => i !== item)
      : [...checkedItems, item];
    setCheckedItems(updatedCheckedItems);
  };

  const handleSelectAll = () => {
    setCheckedItems(items);
  };

  const handleClearAll = () => {
    setCheckedItems([]);
  };

  return (
    <div className="checkbox-list-container">
      <div className="controls">
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="checkbox-list">
        {items.map(item => (
          <div key={item} className="checkbox-item">
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => handleToggle(item)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
