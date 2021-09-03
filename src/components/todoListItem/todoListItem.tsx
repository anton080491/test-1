import React, { FC } from "react";
import { Todo } from '../types/types';
import './todoListItem.css';

interface TodoListItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
    changeTodo: (id: number) => void;
    changeDoing: (id: number) => void;
    changeDone: (id: number) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onRemove, changeTodo, changeDoing, changeDone }) => {

    const removeTodo = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        onRemove(id)
    }

    const ChangeTodoStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        changeTodo(id)
    }
    const ChangeDoingStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        changeDoing(id)
    }
    const ChangeDoneStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        changeDone(id)
    }


    return (
        <div className="todoListItem">
            <span> {todo.name}</span>
            <div className="wrapper">
                <span
                    className='spanStyle'
                    style={{ background: todo.todo ? 'red' : 'white' }}
                    onClick={event => ChangeTodoStatus(event, todo.id)}
                >Todo</span>
                <span
                    className='spanStyle'
                    style={{ background: todo.doing ? '#00AF64' : 'white' }}
                    onClick={event => ChangeDoingStatus(event, todo.id)}
                >Doing</span>
                <span
                    className='spanStyle'
                    style={{ background: todo.done ? '#66A3D2' : 'white' }}
                    onClick={event => ChangeDoneStatus(event, todo.id)}
                >Done</span>
                <span style={{ cursor: "pointer" }}
                    onClick={event => removeTodo(event, todo.id)}> &times;</span>
            </div>
        </div>
    )
}

export default TodoListItem;
