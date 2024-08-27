import { useState } from "react";


function Todo({ name, completed, id, deleteTask, editTask, activeState }) {
  const [isEditing, setEditing] = useState(false); 
  const [newName, setNewName] = useState("");
  
  function handleChange(e) {
    console.log(e.target.value, 'value')
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask({id}, newName)
    setNewName("");
    setEditing(false);
  }

  


  // Function to toggle editing mode 
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input 
        id={`${id}`} 
        className="todo-text" 
        type="text" 
        onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button 
        type="button" 
        className="btn todo-cancel"
        onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={`${id}`} 
          type="checkbox"
          defaultChecked={completed}
          onClick={() => activeState({id})}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button 
        type="button" 
        className="btn"
        onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask({id})}>
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );


  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate} 
      {/* <div className="c-cb">
        <input 
        id={`${id}`} 
        type="checkbox" 
        defaultChecked={completed} />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        
        <button 
        type="button" 
        className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        
        <button 
        type="button" 
        className="btn btn__danger"
        onClick={() => deleteTask({id})}>
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>*/}
    </li> 
  );
}

export default Todo;
