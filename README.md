 1. SYNTAX: 
- Import statements on top of the file allow one to use code that has been identified elsewhere.
- Hooks are a way of using React's features inside a component.
- The App() function returns a JSX expression. This expression defines what your browser ultimately renders to the DOM.
- JSX allows us to write variables and other JavaScript expressions right alongside our other content. 
- The curly braces tell React that we want to read the value of the subject variable, rather than render the literal string "subject".
- {props.name} is a JSX expression, so it needs to be wrapped in curly brackets.
- the key is the unique identifier/value - when looping over an 
-  ?. operator lets us perform optional chaining to check if props.tasks is undefined or null before attempting to create a new array of task names:

2. Class Attribute: className 
- since JSX is but only an extension of JavaScript

3. COMPONENT PROPS: 
- Means of passing data in an react component 
- Their syntax is identical to that of attributes, in fact: prop="value".
- They can only be passed from parent components down to child components.

4. Differences: 
- props are passed into react components
- js: attributes are passed into plain elements

5. KEY NOTES: 
* stack-large: creating a "stack-large" layout typically refers to stacking elements vertically with significant spacing between them. 
* aria-pressed: tells screen readers that the button can be in one of two states: pressed or unpressed. Setting a value of "true" means that the button is pressed by default. 
* non-empty strings as truthy
* id attributes MUST BE UNIQUE 
* npm i nanoid is used to create unique IDs for our new tasks / npm i uuid -- import {v4}

6. Making an <Todo/> component:
# create a `components` directory
mkdir src/components

# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx

7. CALLBACK PROPS: 
- a function written in the <App /> that will expect some data from the form as an input , then pass that function to <Form/> as a prop. (function-as-a-prop)

8. STATE: 
- To give components "memory" – information they can hold onto and update as needed.
- useState() is part of a special category of functions called hooks, each of which can be used to add new functionality to a component. 
- takes only a single argument that determines the initial value of the state.
- argument can be any js data type 
- returns an array containing two items(current value, function used to update the state)

9. HOOKS: 
- setTasks()
