import React, { FC } from 'react';
import AddTodo from './components/addTogo';
import TodoList from './components/todoList';
import AppHeader from './components/appHeader';

const App: FC = () => {
  const todos = [
    { id: 1, todo: true, name: "To wash a car" },
    { id: 2, todo: true, name: "Prepare food" },
    { id: 3, todo: true, name: "Go to the shop " }
  ];

  return (
    <div>
      <AppHeader />
      <AddTodo />
      <TodoList />
    </div>


  )
}

export default App;
