import React, { FC } from "react";
import { Todo } from '../types/types';
import './todoListItem.css';
import { Link } from "react-router-dom"

declare var confirm: (question: string) => boolean;

interface TodoListItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
    changeTodo: (id: number) => void;
    changeDoing: (id: number) => void;
    changeDone: (id: number) => void;
    changeShowingModal: () => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onRemove, changeTodo, changeDoing, changeDone, changeShowingModal }) => {

    const removeTodo = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    const ChangeTodoStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeTodo(id)
    }
    const ChangeDoingStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeDoing(id)
    }
    const ChangeDoneStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeDone(id)
    }

    const changeShowingDate = (event: React.MouseEvent<HTMLSpanElement>, changeShowingModal) => {
        event.preventDefault();
        const shoudChange = confirm('Are you sure you want to change Date?');
        if (shoudChange) {
            changeShowingModal()
        }
    }

    const changeShowingTime = (event: React.MouseEvent<HTMLSpanElement>, changeShowingModal) => {
        event.preventDefault();
        const shoudChange = confirm('Are you sure you want to change Time?');
        if (shoudChange) {
            changeShowingModal()
        }
    }


    return (
        <React.Fragment>
            <Link to={'/' + todo.id}>
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
                        {
                            todo.deadLineData ? <span className='deadLine'
                                onClick={event => changeShowingDate(event, changeShowingModal)}>{todo.deadLineData}</span> : null
                        }
                        {
                            todo.deadLineTime ? <span className='deadLine'
                                onClick={event => changeShowingTime(event, changeShowingModal)}>{todo.deadLineTime}</span> : null
                        }
                        <span style={{ cursor: "pointer" }}
                            onClick={event => removeTodo(event, todo.id)}> &times;</span>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default TodoListItem;
