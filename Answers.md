1. What problem does the context API help solve?
   - It helps solve the problem of props drilling
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   - Actions are objects that hold the type of action taken, and then a payload that hold info needed to generate state.
   - Reducers are pure functions that take is currentstate, and then an action, and returns new state. 
   - Store is basically our centralized state object. It takes in combined reducers to generate a state object. It's known as single source of truth because it spits out one big js object that all components can connect to and then receive some state through props.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application State is centralized state that all components can access directly while component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components.
    - Application state is useful in apps that require some form of complex state management while components state is useful if that component is 'a black box'. That is, no other componenet cares about it's state.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Redux thunk helps in async operations. It intercepts our action creators, uses the info gotten from the components, and then dispatches a new action type and payload to the reducers to generate new state.
5. What is your favorite state management system you've learned and this sprint? Please explain why!
   - REDUX!!! It brings much needed clarity to state management! 
