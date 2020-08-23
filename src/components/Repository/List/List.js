import React from 'react';
import './List.css'

import RepositoryCard from 'components/Repository/Card/Card'

const RepositoryList = ({ loadingMsg, repositories }) => {

    if (loadingMsg) {
        return <div> {loadingMsg} </div>
    }

    return (
        <div className="repository-list">
            {repositories.map((repository, index) => (
                <RepositoryCard key={index} repository={repository} />
            ))}
        </div>
    )
}

export default RepositoryList;