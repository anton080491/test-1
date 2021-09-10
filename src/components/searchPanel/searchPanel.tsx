import React, { FC } from 'react';
import { useState } from 'react';
import './searchPanel.css';

interface SearchProps {
    sendUpdateSearch: (name: string) => void;
}

const Search: FC<SearchProps> = ({ sendUpdateSearch }) => {

    const [searchTodo, setSearchTodo] = useState<string>('');

    const OnUpdateSearch = (e: any) => {
        setSearchTodo(e.target.value);
        sendUpdateSearch(searchTodo);
    }

    return (
        <React.Fragment>
            <div className='div'>
                <div><label htmlFor="search">
                    Search of task:&nbsp;
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Enter task .."
                        className='inputSearc'
                        value={searchTodo}
                        onChange={OnUpdateSearch}
                    />
                </label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search;
