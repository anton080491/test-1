import React, { FC } from "react";
import { useState } from "react";
import './addTodo.css';

interface AddTodoProps {
    addNewTodo(title: string): void
}

const AddTodo: FC<AddTodoProps> = ({ addNewTodo }) => {

    const [newTodo, setNewTodo] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const сreateNewTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if ((newTodo !== '' || null) && (newTodo.length <= 50)) {
            addNewTodo(newTodo);
            setNewTodo('');
        } else {
            alert(`You must fill in the field "To do". Remember - no more than 50 characters!`);
        }
    }

    return (
        <React.Fragment>
            <div className='div'>
                <label htmlFor="newTodo">
                    To do:&nbsp;
                    <input
                        type="text"
                        name="newTodo"
                        id="newTodo"
                        placeholder="Fix the thing.."
                        className='input'
                        value={newTodo}
                        onChange={changeHandler}
                    />
                </label>

                <button className="button"
                    onClick={сreateNewTodo}
                >
                    Add
                </button>
            </div>
        </React.Fragment>
    )
}

export default AddTodo;