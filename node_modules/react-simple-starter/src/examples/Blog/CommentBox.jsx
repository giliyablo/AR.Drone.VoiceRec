import React, { Fragment } from 'react';
import { Consumer } from './Blog';

const CommentBox = () => (
  <Consumer>
    {({ state, actions }) => (
      <Fragment>
        <form onSubmit={actions.replyToComment}>
          <input value={state.comment} onChange={actions.handleInput} /><br />
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )}
  </Consumer>
);
export default CommentBox;
