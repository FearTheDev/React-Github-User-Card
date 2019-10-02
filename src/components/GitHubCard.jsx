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
                Followers: <p className="gh-follower-count">{followers}</p>
                <br />
                Bio: {(bio) ? <p className="gh-bio">{bio}</p> : <p className="gh-bio">A GitHub user that enjoys working on things.</p>}
                <br />
                Website: {(blog !== '')?<a className="gh-website" href={`http://${blog}`} target="_blank" rel="noopener noreferrer"> {blog}</a> : <a className="gh-website" href={`https://github.com/${login}`}  target="_blank" rel="noopener noreferrer">{`https://github.com/${login}`}</a>}
            </div>
        </div>
    );
};

export default GitHubCard;