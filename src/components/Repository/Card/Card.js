import React from 'react';
import './Card.css';


const RepositoryCard = ({ repository }) => (
    < div className="repository-card" >
        <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            className="repository-card__image"
        />
        <div className="repository-card__info">
            <h1 className="repository-card__title"> {repository.name} </h1>
            <span className="repository-card__description"> {repository.description} </span>
            <div className="repository-card__date">
                <span className="repository-card__creation"> Created at: </span>
                <span className="repository-card__creation-date"> {repository.created_at} </span>
                <span className="repository-card__last-update"> Last update: </span>
                <span className="repository-card__last-update-date"> {repository.updated_at} </span>
            </div>
            <footer className="repository-card__footer">
                <span className="repository-card__clone-info"> Clone with </span>

                <button
                    rel="noopener noreferrer"
                    className="repository-card__ssh-clone"
                    onClick={() =>  navigator.clipboard.writeText(repository.ssh_url)}
                >
                    SSH
                    </button>
                <button
                    rel="noopener noreferrer"
                    className="repository-card__https-clone"
                    onClick={() =>  navigator.clipboard.writeText(repository.clone_url)}
                >
                    HTTPS
                    </button>
                <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-card__repo-link"
                >
                    Go to Repository
                    </a>
            </footer>
        </div>
    </ div>
)


export default RepositoryCard;