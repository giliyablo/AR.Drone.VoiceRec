# Blog Tutorial

The most common websites are often blogs and these blogs will usually have a comments section. You often will have a series of html components like this:

```html
<div id='Post'>
  <h1>Post title</h1>
  <h2>03/12/2018</h2>
  <p>This is my first blog post.</p>
  <div  id='Comments'>
    <div>
      User A - I like your blog
    </div>
    <div>
      User B - What a great post
    </div>
  <div>
</div>
```

In React, you might render these posts by making a GET request or GraphQL call. These components will then create a tree that you begin having to pass props through so that you can access the blog data or call actions from the nested components. This can make things difficult to refactor and hard to manage.  Redux's **connect()** method makes it easy to access state and dispatch actions from other components, but Context makes it even easier.  Using Context, we can utilize two key components, Provider and Consumer. The Provider will pass the state and actions you give it using a **values** prop to any Consumer components that are rendered within it.
Below is a realistic example in which we create a Blog class based component that will hold our blogs, and a method to reply to a comment. We will create a set of custom components called Post, Comment, and Comment Box that will be rendered within our Blog container.

## Blog Container

```javascript
import React, { createContext } from 'react'
import { Post, Comment, Avatar } from './components'

const { Provider, Consumer } = createContext();
const database = 'http://api.mysite.com';

class Blog extends React.Component {
  state = {
    blogs: []
  }
  actions = {
    getBlogs: async () => {
        const response = await fetch(`${database}/blogs`);
        const blogs = response.json();
        this.setState({ blogs });
    },
    replyToComment: async (id, comment) => {
        const response = await fetch(database, comment, { method: 'POST' })
    }
  }
  componentWillMount() {
    this.getBlogs()
  }
  render() {
    return(
        <Provider value={{ state: this.state, actions: this.actions }}>
          {this.state.blogs.map(post => <Post data={post} />)}
        </Provider>
    )
  }
}
export { Blog, Consumer }
```

We can manage the state and actions in the parent component. Both the state and actions are passed into the Provider component which will become available to any Consumer components that are rendered inside the Provider.
So in this example, we fetch our blog posts and add them into the state of the Blog component. We also created a method to reply to a comment on a particular post by passing in the id of the post and the comment we want to add.
Typically in React, we would have to pass a reference to the blogs into the Post component and any functions that we would want to call. So we pass the particular post as a prop into the Post component. Within the Post component, we will render the current comments.

## Components

```javascript
import React, { Fragment } from 'react';
import { Comment } from './comment';

const Post = ({ post }) => (
  <Fragment>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    {post.comments.map(comment => <Comment data={comment}/>)}
  </Fragment>
)
export default Post;
```

At this point, if we wanted to call the replyToComment method that we defined in the parent component, we would first need to pass it as a prop to the Post component, second as a prop to the Comment component, and lastly to a CommentBox component. This is where Context becomes useful.
We can import the Consumer component from the parent component and gain access to the state and actions that we passed into the Provider component.

```javascript
import React, { Fragment } from 'react';
import { Consumer } from './Blogs';

const CommentBox = () => (
  <Consumer>
    {({state, actions}) => (
      <Fragment>
        <textarea rows="5" /><br />
        <button onClick={() => actions.replyToComment(comment)}></button>
      </Fragment>
    )}
  </Consumer>
)
export default CommentBox;
```

So whats going on here? I am referencing the state and the actions inside the consumer component. I am only utilizing the actions so you can omit the state if desired. Since we wrap the html in a Consumer component, we can use this fancy arrow function to get our replyToComment action. When React renders this, state and action will be the objects we passed into the value prop of the Provider.
Pretty neat.

Below is a working example using a hardcoded set of blogs. If you would like to edit this, [here is a codepen]('https://codepen.io/patemery/pen/MVmowg').

## Working Example