React Exercise:
Smart Component (ShoppingList)

Manages the state with useState.
Passes the items to the dumb component as props.
Handles the logic for adding and removing items.
Dumb Component (ShoppingListDisplay)

Receives the list of items as props.
Provides buttons for adding and removing items.
Emits events (via props functions) for these actions.
Steps:

Create two components: ShoppingList.js and ShoppingListDisplay.js.
Implement ShoppingListDisplay:
Props for the items list.
Buttons to trigger onAdd and onRemove actions.
Implement ShoppingList:
Uses React’s useState to manage the items array.
Passes data and event handlers to the display component.

Goal:
By completing this exercise, you will understand:

How to separate logic (smart components) and presentation (dumb components).
How to pass data and events between components in Angular and React.
