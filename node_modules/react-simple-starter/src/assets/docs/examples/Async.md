# Async Example

Another key feature of this starter is the use of async functions. Babel has been pre-configured to handle them as well as class transform properties. This makes a really clean setup for managing your state and actions.

## GitHub Profile Fetcher

```javascript
import React, { Fragment } from 'react';

class GitHubProfile extends React.Component {
  state = {
    text: 'Enter your GitHub username here!'
    user: 'patemeryfl',
    fetchedUser: {
      avatar: null,
      name: null,
      username: null,
      followers: null,
    }
  }
  actions = {
    handleInput: (event) => {
      this.setState({ user: event.target.value  })
    },
    getUser: async () => {
      const response = await fetch(`https://api.github.com/users/${this.state.user}`);
      const profile = await response.json();
      return this.setState({
          fetchedUser: {
            avatar: profile.avatar_url,
            name: profile.name,
            username: profile.login,
            followers: profile.followers
          }
        });
      },
  }
  componentWillMount() {
    this.actions.getUser("patemeryfl");
  }
  render() {
    const { avatar, name, username, followers } = this.state.fetchedUser;
    return(
      <Fragment>
        <input placeholder={this.state.text} onChange={this.actions.handleInput} />
        <button onClick={this.state.getUser}>Fetch your profile info</button>
        <strong>Name:</strong><p>{name}</p>
        <strong>Stars:</strong><p>{stars}</p>
        <strong>Followers:</strong><p>{followers}</p>
      </Fragment>
    )
  }
}
```

In this example, we define our state to manage the input box as well as an initial object to hold the returned GitHub profile data. We have an async function as an action that takes a username as a parameter and passes it into fetch using a template literal. We use the await keyword to create a clean way of handling the response once the fetch method resolves. When it resolves, we call setState to add our fetched user to our state and re-render the component with the new data.

## Working Example