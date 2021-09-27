import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './appHeader.css';


interface AppHeaderProps {
    allTasks: number;
    Todo: number;
    Doing: number;
    Done: number;
    ShowAllTasks: boolean;
    allTodo: boolean;
    allDoing: boolean;
    allDone: boolean;
}

const AppHeader: FC<AppHeaderProps> = ({ allTasks, Todo, Done, Doing, ShowAllTasks, allTodo, allDoing, allDone }) => {
    return (
        <React.Fragment>
            <div className="AppHeader">
                <Link to={'/'}> <h2>Task list</h2></Link>
                <div className="tasks">
                    <span onClick={ShowAllTasks}>All tasks: {allTasks}</span>
                    <span onClick={allTodo}>Todo: {Todo}</span>
                    <span onClick={allDoing}>Doing: {Doing}</span>
                    <span onClick={allDone}>Done: {Done}</span>
                </div>
            </div>
        </React.Fragment>

    )

}

export default AppHeader;