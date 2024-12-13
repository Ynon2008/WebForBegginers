import React, { useState } from "react";
import ShoppingListDisplay from "./ShoppingListDisplay";

const ShoppingList = () => {
  const [items, setItems] = useState([
    { name: "Apples", quantity: 3 },
    { name: "Bananas", quantity: 2 },
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ShoppingListDisplay
      items={items}
      onAdd={handleAddItem}
      onRemove={handleRemoveItem}
    />
  );
};

export default ShoppingList;
