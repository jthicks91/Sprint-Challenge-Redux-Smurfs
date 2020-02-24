1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.map, array.filter, array.reduce;
Object.assign, array.concat
Create a new object with object. assign and spread operator;

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are sent to inform that something needs to be updated and that they info about this update. The reducers take these actions and outputa  new and updated version of the state absed on what these actions brought them. Then this new state is saved in the store as it is the single source of all the state. Kind of like a banks safe where all the money is stored.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state refers to the state of the application as a whole and this is held in the store using redux which means it is the same across all the apps components. Component state lives on the particular component by itself and cannot be accessed outside of its scope.

1.  What is middleware?
- a function that gives actions the ability to be dispatched, rate and changed accordingly on a case by case basis before they are transferred to the store.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk is a type of middleware that lets the function dispatch process functions that create actions and all dispatch, as opposed to just processing the actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?


Connect and mapStateToProps