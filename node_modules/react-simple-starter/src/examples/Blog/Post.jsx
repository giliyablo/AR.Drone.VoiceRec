import React, { Fragment } from 'react';
import Comment from './Comment';

const Post = ({ post }) => (
  <Fragment>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    {post.comments.map(comment => <Comment comment={comment} />)}
  </Fragment>
);
export default Post;
