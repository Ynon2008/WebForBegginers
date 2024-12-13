Angular Exercise:
Smart Component (ShoppingListComponent)

Responsible for managing the state.
Holds a list of shopping items (e.g., [{ name: 'Apples', quantity: 3 }, { name: 'Bananas', quantity: 2 }]).
Passes the list to the dumb component.
Handles adding and removing items.
Dumb Component (ShoppingListDisplayComponent)

Receives the list of items as an @Input().
Emits events (@Output()) for adding a new item and removing an item.

Implement ShoppingListDisplayComponent:
Input for the items list.
Buttons to trigger add and remove events.

Implement ShoppingListComponent:
Handles the state logic and passes data to the display component.
Uses event bindings to handle actions from the display component.

Goal:
By completing this exercise, you will understand:

How to separate logic (smart components) and presentation (dumb components).
How to pass data and events between components in Angular and React.
