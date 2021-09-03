import React, { FC } from "react";
import { Todo } from '../types/types';
import TodoListItem from '../todoListItem';
import './todoList.css';

interface TodoListProps {
    todos: Todo[];
    onRemove: (id: number) => void;
}



const TodoList: FC<TodoListProps> = ({ todos, onRemove }) => {

    if (todos.length === 0) {
        return <div style={{ textAlign: "center" }}>Add some tasks</div>
    }

    const removeTodo = (id: number) => {
        onRemove(id);
    }


    return (
        <div>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemove={removeTodo}
                />
            )}
        </div>
    )
}

export default TodoList;