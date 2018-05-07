import React from 'react';
import connect from './connect';

class Auth extends React.Component {
    state = { }
    render() {
      const { state, actions } = this.props.context;
      return (
        <div>
          <span> Logged In?: </span>{state.loggedIn}
          <button onClick={actions.logIn}>Sign In</button>
        </div>
      );
    }
}

export default connect(Auth);
