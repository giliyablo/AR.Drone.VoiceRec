import React, { createContext } from 'react';
import Post from './Post';

const { Provider, Consumer } = createContext();

class Blog extends React.Component {
  state = {
    blogs: [
      {
        id: 1,
        title: 'How To Use Context',
        body: `I just read this great tutorial on Context in this new 
               React starter called simple-react-starter. Its so great!`,
        comments: [
          {
            user: 'Anonymous',
            comment: 'So helpful!',
          },
        ],
      },
      {
        id: 2,
        title: 'First Blog Post',
        body: 'Hello World',
        comments: [
          {
            user: 'Pat Emery',
            body: 'Great Post',
          },
          {
            user: 'John Smith',
            body: 'Very Interesting',
          },
        ],
      },
    ],
    comment: 'Leave your reply here',
  }
  actions = {
    replyToComment: (id) => {
      const blog = this.state.blogs.find(post => post.id === id);
      blog.comments.push(this.state.comment);
      const updated = Object.assign({ ...this.state.blogs, blog });
      this.setState({ blogs: updated });
    },
    handleInput: ({ comment }) => {
      this.setState({ comment });
    },
  }
  render() {
    return (
      <Provider value={{ state: this.state, actions: this.actions }}>
        {this.state.blogs.map(post => <Post post={post} />)}
      </Provider>
    );
  }
}

export { Blog, Consumer };
