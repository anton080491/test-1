import React, { FC } from "react";
import { Todo } from '../types/types';
import TodoListItem from '../todoListItem';


import './todoList.css';

interface TodoListProps {
    todos: Todo[];
    onRemove: (id: number) => void;
    changeTodo: (id: number) => void;
    changeDoing: (id: number) => void;
    changeDone: (id: number) => void;
    changeShowingModal: () => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onRemove, changeTodo, changeDoing, changeDone, changeShowingModal }) => {

    if (todos.length === 0) {
        return <div style={{ textAlign: "center" }}>Add some tasks</div>
    }

    const removeTodo = (id: number) => {
        onRemove(id);
    }

    return (
        <React.Fragment>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemove={removeTodo}
                    changeTodo={changeTodo}
                    changeDoing={changeDoing}
                    changeDone={changeDone}
                    changeShowingModal={changeShowingModal}
                />
            )}
        </React.Fragment>
    )
}

export default TodoList;
