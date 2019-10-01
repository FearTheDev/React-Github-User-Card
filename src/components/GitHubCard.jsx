import React from 'react';

const GitHubCard = ({...props}) =>{

    return(
        <div className="gh-card">
            <div className="gh-user">
                <h1 className="gh-user">{login}</h1>
                <img className="gh-avatar" src={avatar_url} alt={`avatar for ${login}`} />
                
            </div>
            <p className="gh-follower-count">{followers}</p>
            <p className="gh-bio">{bio}</p>
            <p className="gh-website">{blog}</p>
        </div>
    );
};

export default GitHubCard;