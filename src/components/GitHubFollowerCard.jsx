import React from 'react';

const GitHubFollowerCard = props =>{

    const {login, avatar_url, bio, html_url} = props;

    return(
    <div className="gh-follower-card">
        <div className="gh-follower">
            <h1 className="gh-follower-login">{login}</h1>
            <div className="gh-follower-avatar">
                <img onClick={() => props.searchUser(login)}  src={avatar_url} alt={`avatar for ${login}`} />
            </div>
        </div>
        <p className="gh-follower-bio">{bio}</p>
        <a href={html_url} target="_blank" rel="noopener noreferrer" className="gh-follower-link">View Profile</a>
    </div>
    );
};

export default GitHubFollowerCard;