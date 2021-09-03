import React, { FC } from "react";
import { Todo } from '../types/types';
import './todoListItem.css';

interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {



    return (
        <div className="todoListItem">
            <span> {todo.name}</span>
            <div className="wrapper">
                <span style={{ cursor: "pointer" }}> &times;</span>
            </div>
        </div>
    )
}

export default TodoListItem;
