import React from 'react';

const GitHubCard = props =>{

    const {login, avatar_url, followers, bio, blog} = props;

    return(
        <div className="gh-card">
            <div className="gh-user">
                <h1 className="gh-user-login">{login}</h1>
                <div className="gh-avatar">
                    <img className="gh-avatar-img" src={avatar_url} alt={`avatar for ${login}`} />
                </div>
            </div>

            <div className="gh-user-info">
                <p className="gh-follower-count">Followers: {followers}</p>
                <p className="gh-bio">Bio: {bio}</p>
                <p className="gh-website">Website: {blog}</p>
            </div>
        </div>
    );
};

export default GitHubCard;