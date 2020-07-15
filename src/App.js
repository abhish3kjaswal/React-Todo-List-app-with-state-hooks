import React, { useState } from 'react';

import './App.css';

//Todo items component
function Todo({ todo, index, completeTodo, delTodo }) {
  return (
    <div
      style={{
        backgroundColor: todo.isCompleted ? 'green' : 'white',
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
      }}
      className='todo'
    >
      <div>
        <button className='btn-x' onClick={() => delTodo(index)}>
          x
        </button>
      </div>
      {todo.text}
      <div>
        <button className='btn-c' onClick={() => completeTodo(index)}>
          Complete
        </button>
      </div>
    </div>
  );
}

//Todo form component
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        vale={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add text here !!'
      ></input>
      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
}

//main app function
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Todo list application',
      isCompleted: false,
    },
    {
      text: 'TodoList using react and statehooks',
      isCompleted: false,
    },
    {
      text: 'Watch Money heist',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const delTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  return (
    <div className='App'>
      <div className='app'>
        <div className='todoHead'>
          <h1>Todo-List</h1>
        </div>

        <div className='todo-list'>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              delTodo={delTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
