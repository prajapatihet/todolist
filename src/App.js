import { useState } from 'react';
import './App.css';

function App() {

  let [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
    } else {
      alert('TOdo name Already exists')
    }
    // alert(toname);
    event.preventDefault();
  }

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNumebr={index} todolist={todolist} setTodolist={setTodolist} />
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' /><button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumebr, todolist, setTodolist }) {


  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumebr)
    setTodolist(finalData);
  }

  let checkStatus = () => {
    setStatus(!status)
  }

  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>{indexNumebr + 1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}