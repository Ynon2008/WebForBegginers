import React from "react";

const ShoppingListDisplay = ({ items, onAdd, onRemove }) => {
  const addNewItem = () => {
    const newItem = { name: "Oranges", quantity: 1 };
    onAdd(newItem);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} (x{item.quantity})
            <button onClick={() => onRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addNewItem}>Add Item</button>
    </div>
  );
};

export default ShoppingListDisplay;
