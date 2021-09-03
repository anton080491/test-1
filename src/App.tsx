import React, { FC } from 'react';
import { useState } from 'react';
import AddTodo from './components/addTogo/addTodo';
import TodoList from './components/todoList';
import AppHeader from './components/appHeader';

import { Todo } from './components/types/types';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, name: "To wash a car" },
    { id: 2, name: "Prepare food" },
    { id: 3, name: "Go to the shop " }
  ]);

  let [maxId, setMaxId] = useState<number>(4);

  const AddNewTodo = (name: string) => {
    setMaxId(++maxId);
    const newTodo: Todo = { id: maxId, name: name };
    setTodos(prev => [newTodo, ...prev]);
  }

  return (
    <div>
      <AppHeader />
      <AddTodo addNewTodo={AddNewTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
