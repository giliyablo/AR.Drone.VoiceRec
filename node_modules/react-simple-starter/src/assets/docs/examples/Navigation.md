# Navigation Menu

The side navigation menu that is used in this starter utilizes Context to allow each menu item to have access to the state and actions on its parent component. The parent state has the title of each item and the action is an async function that fetches the markdown file from GitHub that these examples are written in. Below is the code for the Features component.

```javascript
import React, { createContext } from  'react';
import ReactMarkdown from  'react-markdown';
import { Post, SideNav } from  '../components';

const { Provider, Consumer } = createContext();

class Features extends React.Component {

  state = {
    user: null,
    examples: [
      'Blog',
      'Async',
      'Navigation',
    ],
    content: 'Blog',
  }

  componentWillMount() {
    this.actions.getMarkdown(this.state.content);
  }

  actions = {
    getMarkdown: async (example)  => {
      const response = await fetch(`https://raw.githubusercontent.com/patemeryfl/react-simplestarter/master/src/assets/docs/examples/${example}.md`);
      const body = await response.text();
      return this.setState({ content: body });
    },
  }

  render() {
    return (
      <div className="examples">
        <Provider value={{ state: this.state, actions: this.actions }} >
         <aside>
           <h2>Examples</h2>
           <SideNav items={this.state.examples} />
         </aside>
         <article>
            <ReactMarkdown  source={Blog} />
          </article>
        </Provider>
      </div>
    );
  }
}

export { Features, Consumer };
```

First, I create a Provider and Consumer that will contain the state and actions that will be accessed through the components in the render method. I pass an items prop to the SideNav component that will contain the array of examples in the parents state.

```javascript
import React from  'react';
import MenuItem from  './MenuItem';

const SideNav = ({ items }) => (
  items.map(i => <MenuItem item={i} key={i} />)
);

export default SideNav;
```

Inside the SideNav component, I map over the items and render a new MenuItem component. I pass the items as a prop in this starter, but you can just as easily access them via the state key within the Consumer. See the blog example for this concept.

```javascript
import React, { Fragment } from 'react';
import icons from '../assets/svgs';
import { Consumer } from '../containers/Features';

const MenuItem = ({ item }) => (
  <Consumer>
    {({ actions }) => (
      <Fragment>
        <button onClick={() => actions.getMarkdown(item)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path d={icons.chevron} />
          </svg>
          { item }
          </button><br />
        </Fragment>
      )}
    </Consumer>
);

export default MenuItem;
```

Inside the MenuItem component, I import the Consumer which allows me to access the actions I passed into the Provider in the parent component. I am able to call the getMarkdown method passing in the item prop without having to pass the method as a prop.