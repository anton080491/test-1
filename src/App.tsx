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

  let [maxId, setMaxId] = useState<number>(4);

  const AddNewTodo = (name: string) => {
    setMaxId(++maxId);
    const newTodo: Todo = { id: maxId, todo: true, doing: false, done: false, name: name };
    setTodos(prev => [newTodo, ...prev]);
    console.log(newTodo);
  }

  const RemoveTodo = (id: number) => {
    const shoudRemove = confirm('Are you sure you want to delete the task?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  const ChangeTodoStatus = (id: number) => {
    const index = todos.findIndex(elem => elem.id === id);
    const old = todos[index];
    const newItem = { ...old, todo: !old.todo, done: false, doing: false };
    const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    setTodos(newArr);
  }

  const ChangeDoingStatus = (id: number) => {
    const index = todos.findIndex(elem => elem.id === id);
    const old = todos[index];
    const newItem = { ...old, doing: !old.doing, done: false, todo: false };
    const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    setTodos(newArr);
  }

  const ChangeDoneStatus = (id: number) => {
    const index = todos.findIndex(elem => elem.id === id);
    const old = todos[index];
    const newItem = { ...old, done: !old.done, todo: false, doing: false };
    const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    setTodos(newArr);
  }

  return (
    <div>
      <AppHeader />
      <AddTodo
        addNewTodo={AddNewTodo} />
      <TodoList
        todos={todos}
        onRemove={RemoveTodo}
        changeTodo={ChangeTodoStatus}
        changeDoing={ChangeDoingStatus}
        changeDone={ChangeDoneStatus} />
    </div>
  )
}

export default App;
