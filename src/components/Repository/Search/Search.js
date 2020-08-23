import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'

import RepositoryList from 'components/Repository/List/List';


const RepositorySearch = () => {

    const [repositories, setrepositories] = useState([]);
    const [loadingMsg, setLoadingMsg] = useState('Waiting input data');

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            setLoadingMsg('Find repo...');

            axios.get(`http://localhost:3003/repo/${ev.target.value}`)
                .then(resp => {
                    if (resp['data']['message'] && resp['data']['message'] === 'Not Found') {
                        setLoadingMsg('User Not Found on Github');
                    } else {
                        if (resp['data'].length === 0) {
                            setLoadingMsg(`User don't have repositories`);
                        } else {
                            setLoadingMsg(null);
                            setrepositories(resp['data']);
                        }
                    }
                });
        }
    }

    return (
        <div className="repository-search">
            <header className="repository-search__header">
                <h1> Find repo-list by Github user </h1>
            </header>
            <input
                type="search"
                className="repository-search__input"
                onKeyDown={handleKeyDown}
                placeholder="Type an User from Github to see yours repositories"
            />
            <RepositoryList repositories={repositories} loadingMsg={loadingMsg} />
        </div>
    )
}

export default RepositorySearch;