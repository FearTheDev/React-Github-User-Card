import React from 'react';

const GitHubFollowerCard = props =>{

    const {login, avatar_url, bio, html_url} = props;

    return(
    <div className="gh-follower-card">
        <div className="gh-follower">
            <h1 className="gh-follower-login">{login}</h1>
            <img className="gh-follower-avatar" src={avatar_url} alt={`avatar for ${login}`}/>
        </div>
        <p className="gh-follower-bio">{bio}</p>
        <p className="gh-follower-url">{html_url}</p>
    </div>
    );
};

export default GitHubFollowerCard;