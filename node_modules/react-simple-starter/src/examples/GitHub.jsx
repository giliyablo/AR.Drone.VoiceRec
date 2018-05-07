import React, { Fragment } from 'react';

class GitHub extends React.Component {
  state = {
    text: 'Enter your GitHub username here!',
    user: 'patemeryfl',
    fetchedUser: {
      avatar: null,
      name: null,
      username: null,
      followers: null,
    },
  }
  componentWillMount() {
    this.actions.getUser(this.state.user);
  }
  actions = {
    handleInput: (event) => {
      this.setState({ user: event.target.value });
    },
    getUser: async () => {
      const response = await fetch(`https://api.github.com/users/${this.state.user}`);
      const profile = await response.json();
      return this.setState({
        fetchedUser: {
          avatar: profile.avatar_url,
          name: profile.name,
          username: profile.login,
          followers: profile.followers,
        },
      });
    },
  }
  render() {
    const { avatar, name, username, followers } = this.state.fetchedUser;
    return (
      <Fragment>
        <div className="GithubForm">
          <input placeholder={this.state.text} onChange={this.actions.handleInput} />
          <button onClick={this.actions.getUser}>Fetch</button>
        </div>
        <div className="GithubDisplay">
          <img src={avatar} alt={name} />
          <div>
            <strong>Name:</strong>{name}<br />
            <strong>Username:</strong>{username}<br />
            <strong>Followers:</strong>{followers}<br />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GitHub;
