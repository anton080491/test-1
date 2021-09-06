import { FC } from "react";
import React from "react";
import { Todo } from '../types/types';
// import { useState } from 'react';
import styles from './Popup.module.css';

interface props {
    todos: Todo[];
    show: boolean;
    changeShowingModal: () => void;

}

const PopUp: FC<props> = ({ show, changeShowingModal }) => {

    // const [deadLineData, setDeadLineData] = useState<string>('')
    // const [deadLineTime, setDeadLineTime] = useState<string>('')

    // const DeadLineData = (e: any) => {
    // setDeadLineData(e.target.value)
    // }

    // const DeadLineTime = (e: any) => {
    // setDeadLineTime(e.target.value)
    // }



    return (
        <>
            <div className={styles.wrapper + " " + (show && styles.active)}>
                <div className={styles.modal}>
                    <label htmlFor="setDeadline">
                        Dead Line Data:&nbsp;
                        <input
                            type="date"
                            name="setDeadline"
                            id="setDeadline"
                            placeholder="Enter deadline .."
                            className='input'
                        // onChange={DeadLineData}
                        />
                    </label>

                    <label htmlFor="setDeadline">
                        Dead Line Time:&nbsp;
                        <input
                            type="time"
                            name="setDeadline"
                            id="setDeadline"
                            placeholder="Enter deadline .."
                            className='input'
                        // onChange={}
                        />
                    </label>
                    <button onClick={changeShowingModal}>Закрыть</button>
                </div>
            </div>
        </>

    )
}
export default PopUp