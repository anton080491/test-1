import React, { FC } from "react";
import { Todo } from '../types/types';
import TodoListItem from '../todoListItem';


import './todoList.css';

interface TodoListProps {
    todos: Todo[];
    searchTodoName: string;
    onRemove: (id: number) => void;
    changeTodo: (id: number) => void;
    changeDoing: (id: number) => void;
    changeDone: (id: number) => void;
    sendId: (id: number) => void;
    setShowModal: () => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onRemove, changeTodo, changeDoing, changeDone, sendId, setShowModal, searchTodoName }) => {

    if (todos.length === 0) {
        return <div style={{ textAlign: "center" }}>Add some tasks</div>
    }

    // const removeTodo = (id: number) => {
    //     onRemove(id);
    // }

    let content = todos.map(todo =>
        <TodoListItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            changeTodo={changeTodo}
            changeDoing={changeDoing}
            changeDone={changeDone}
            sendId={sendId}
            setShowModal={setShowModal}
        />
    )

    if (searchTodoName.length > 1) {
        const searchTodo = todos.filter(todo => todo.name.toLowerCase().indexOf(searchTodoName.toLowerCase()) > -1);
        content = searchTodo.map(todo =>
            <TodoListItem
                key={todo.id}
                todo={todo}
                onRemove={onRemove}
                changeTodo={changeTodo}
                changeDoing={changeDoing}
                changeDone={changeDone}
                sendId={sendId}
                setShowModal={setShowModal}
            />
        )

    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default TodoList;
