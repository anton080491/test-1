import React, { FC } from 'react';
import { useState } from 'react';
import AddTodo from './components/addTogo/addTodo';
import TodoList from './components/todoList';
import AppHeader from './components/appHeader';

import { Todo } from './components/types/types';

declare var confirm: (question: string) => boolean

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

  const RemoveTodo = (id: number) => {
    const shoudRemove = confirm('Are you sure you want to delete the task?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <div>
      <AppHeader />
      <AddTodo addNewTodo={AddNewTodo} />
      <TodoList todos={todos}
        onRemove={RemoveTodo} />
    </div>
  )
}

export default App;
