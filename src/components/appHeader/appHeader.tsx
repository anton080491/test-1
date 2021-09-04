import React, { FC } from 'react';
import './appHeader.css';

interface AppHeaderProps {
    allTasks: number;
    Todo: number;
    Doing: number;
    Done: number;
}

const AppHeader: FC<AppHeaderProps> = ({ allTasks, Todo, Done, Doing }) => {
    return (
        <React.Fragment>
            <div className="AppHeader">
                <h2>Task list</h2>
                <div className="tasks">
                    <span>All tasks: {allTasks}</span>
                    <span>Todo: {Todo}</span>
                    <span>Doing: {Doing}</span>
                    <span>Done: {Done}</span>
                </div>
            </div>
        </React.Fragment>

    )

}

export default AppHeader;