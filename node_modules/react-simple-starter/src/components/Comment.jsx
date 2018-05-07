import React, { Fragment } from 'react';
import { Consumer } from '../containers/Features';

const Comment = () => (
  <Consumer>
    {({ state, actions }) => (
      <Fragment>
        <button onClick="">Get GitHub</button>
        <span>{state.user}</span>
      </Fragment>
    )}
  </Consumer>
);

export default Comment;
