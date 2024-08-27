import "./App.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";
import Todo from "./components/Todo.jsx";


function App(props) {

  // state
  const [completed, setCompleted] = useState([])
  const [inCompleted, setInCompleted] = useState([])
   //Deleting a task
   function deleteTask({id}) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);

    
    let newArr = remainingTask;
    window.localStorage.setItem("todo-list", JSON.stringify(newArr));
    console.log({id});
   }
 
  // state of the button(when marked completed needs to be remained that way)
  function activeState({id}) {
   let activatedState = tasks.map(item =>
      id === item.id
          ? { ...item, completed: !item.completed }
          : item
  );
    
    let newArr = activatedState;
    window.localStorage.setItem("todo-list", JSON.stringify(newArr));
    // console.log(activeState, "here");
  }

   //Edit a task
   function editTask({id}, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // copy the task & update the name
        return { ...task, name: newName}; 

      }
      // Return the original task if its not the edited task
      return task;  // keep the original task unchanged
    });
    setTasks(editedTaskList);

    let newArr = editedTaskList;
    window.localStorage.setItem("todo-list", JSON.stringify(newArr));
    // console.log({id});

    // console.log(editedTaskList)
   }

  // Manipulating the state & making it a reusable component 
  const [tasks, setTasks] = useState(props.tasks);

  const filterTasks = (value) => {
    let storeage = window.localStorage.getItem("todo-list");
    let data = JSON.parse(storeage);

    let arr = [];
    if (value === "All") {
      arr = data;
    } else if (value === "Active") {
      data.filter((item) => {
        if (!item.completed) {
          arr.push(item);
        }
      });
    } else {
      data.filter((item) => {
        if (item.completed) {
          arr.push(item);
        }
      });
    }

    setTasks(arr);
  };
//-----------------------------------------------------------------------------------------
// Adding tasks
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]); // '...' looping through the current & new tasks

    let newArr = [...tasks, newTask];
    window.localStorage.setItem("todo-list", JSON.stringify(newArr));
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}  
      editTask = {editTask} 
      activeState={activeState}
      />
  ));
  console.log(props);


  useEffect(() => {
    console.log('effect running . . . ')
    
  const completedArr = [];
  const inCompletedArr = [];

    taskList.filter((item) => {
      console.log(item, "here");
      if (item.props.completed) {
        completedArr.push(item);

        setCompleted(completedArr)
      } else {
        inCompletedArr.push(item);
        setInCompleted(inCompletedArr)
      }
    });

  }, [])


  //---------------------------------------------------------------- 

  const tasksNoun = inCompleted.length > 1 ? "tasks" : "task";
  // const headingText = `${inCompletedArr.length} ${tasksNoun} remaining`; // correcting on how many tasks are remaining
  const headingText = inCompleted.length === 0 || inCompleted.length < 1 ? '' : `${inCompleted.length} ${tasksNoun} remaining` // correcting on how many tasks are remaining
  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton
          name="All"
          onPress={() => {
            filterTasks("All");
          }}
        />
        <FilterButton
          name="Active"
          onPress={() => {
            filterTasks("Active");
          }}
        />
        <FilterButton
          name="Completed"
          onPress={() => {
            filterTasks("Completed");
          }}
        />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );  
}

export default App;
