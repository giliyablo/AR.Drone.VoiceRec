import React, { createContext } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Post, SideNav } from '../components';
import { Blog, GitHub, Auth } from '../examples';

const { Provider, Consumer } = createContext();

class Features extends React.Component {
  state = {
    user: null,
    examples: [
      'Blog',
      'Async',
      'Navigation',
      'Higher Order Components',
    ],
    example: 'HOC',
    content: null,
  }
  componentWillMount() {
    this.actions.getMarkdown(this.state.example);
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
  actions = {
    getMarkdown: async (example) => {
      const response = await fetch(`
        https://raw.githubusercontent.com/patemeryfl/react-simple-starter/master/src/assets/docs/examples/${example}.md
      `);
      const body = await response.text();
      return this.setState({ example, content: body });
    },
  }

  render() {
    let example;
    if (this.state.content === null) {
      return (<div>Loading...</div>);
    }
    switch (this.state.example) {
      case 'Blog':
        example = <Blog />;
        break;
      case 'Async':
        example = <GitHub />;
        break;
      case 'HOC':
        example = Auth;
        break;
      default:
        example = null;
    }
    return (
      <div className="examples">
        <Provider value={{ state: this.state, actions: this.actions }} >
          <aside>
            <h2>Examples</h2>
            <SideNav items={this.state.examples} />
          </aside>
          <article>
            <ReactMarkdown source={this.state.content} />
            {example}
          </article>
        </Provider>
      </div>
    );
  }
}

export { Features, Consumer };
