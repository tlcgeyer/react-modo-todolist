import { useState } from "react";

function Form(props) {
  
  // We are defining a name constant with the value "Learn React".
  // We are defining a function whose job it is to modify name, called setName().
  // useState() returns these two things in an array, so we are using array destructuring to capture them both in separate variables.
  const [name, setName] = useState("");

  function handleChange(event) {
        // console.log(event.target.value);  this allows one to see within the console the letters we typing
        setName(event.target.value);  // this updates the name constant with the value of the input field as it changes.
  
    }
    
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");  // this clears the input field after submitting the form.  If you want to keep the input field filled after submitting, you would remove this line.  But remember to add it back if you want to add more tasks.  It's a good practice to keep the input field clear after submission.  This is because it helps prevent users from accidentally submitting the same task multiple times.  The clear input field also helps to prevent the form from reloading the page after submission.  
  } 
 
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
