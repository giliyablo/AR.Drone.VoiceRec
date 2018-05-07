import React, { Fragment } from 'react';
import CommentBox from './CommentBox';

const Comment = ({ comment }) => (
  <Fragment>
    <strong>{comment.user}</strong>
    <p>{comment.body}</p>
    <CommentBox />
  </Fragment>
);

export default Comment;

