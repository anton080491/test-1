import React, { FC } from "react";
import { Todo } from '../types/types';
import TodoListItem from '../todoListItem';
import './todoList.css';

interface TodoListProps {
    todos: Todo[];
}



const TodoList: FC<TodoListProps> = ({ todos }) => {


    return (
        <div>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
    )
}

export default TodoList;
