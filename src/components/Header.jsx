import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h2>Logo</h2>
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
