import React from 'react';
import './List.css'

import RepositoryCard from 'components/Repository/Card/Card'

const RepositoryList = ({ loadingMsg, repositories }) => {

    if (loadingMsg) {
        return <div className="repository-list__load-msg"> <span>{loadingMsg}</span> </div>
    }

    return (
        <div className="repository-list__card">
            {repositories.map((repository, index) => (
                <RepositoryCard key={index} repository={repository} />
            ))}
        </div>
    )
}

export default RepositoryList;