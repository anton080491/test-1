import React, { FC } from "react";
import { Todo } from '../types/types';
import './todoListItem.css';

interface TodoListItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onRemove }) => {

    const removeTodo = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        onRemove(id)
    }

    return (
        <div className="todoListItem">
            <span> {todo.name}</span>
            <div className="wrapper">
                <span
                    style={{ cursor: "pointer" }}
                    onClick={event => removeTodo(event, todo.id)}> &times;
                </span>
            </div>
        </div>
    )
}

export default TodoListItem;
