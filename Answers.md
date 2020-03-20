1. What problem does the context API help solve?
Context API allows us to share values throughout components without having to pass props through every level.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 action dispatches what to do from the user's response. dispatches will update the state according to action. 
 store stores data in state in single location (this is why it is called single source of truth) and can be accessed any components in the system by connection to store using conncet function.
 Reducers hold the logic of when and how to change to original state in response to the actions.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state is local and applciation state is global.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
use redux-thunk to make the flow asynchronous in order to make API called from the action creators. middleware cuts the normal redux flow to make a call before actions make it to the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux because I still need to familiarize myself with it. it was fun but confusing/overwhelming  at first. 