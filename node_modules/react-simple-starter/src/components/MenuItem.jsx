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
