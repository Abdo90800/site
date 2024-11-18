// src/components/atoms/Link.js
import React from 'react';

const Link = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

export default Link;
