import React, { FC } from 'react';
import { useState } from 'react';
import AddTodo from './components/addTogo/addTodo';
import TodoList from './components/todoList';
import AppHeader from './components/appHeader';

import { Todo } from './components/types/types';

declare var confirm: (question: string) => boolean

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, todo: true, doing: false, done: false, name: "To wash a car" },
    { id: 2, todo: true, doing: false, done: false, name: "Prepare food" },
    { id: 3, todo: true, doing: false, done: false, name: "Go to the shop " }
  ]);

  return (
    <div>
      <AppHeader />
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
