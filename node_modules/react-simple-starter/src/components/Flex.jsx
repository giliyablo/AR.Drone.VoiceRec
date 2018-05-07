import React, { createElement } from 'react';

const Flex = ({ type, children }) => (
  <div className={type}>
    {children}
  </div>
);

export default Flex;
