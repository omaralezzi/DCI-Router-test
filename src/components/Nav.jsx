import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink
            className='different'
            to='/'
            exact
            activeStyle={{ color: 'green', textDecoration: 'underline' }}>
            <li>Home</li>
          </NavLink>
          <NavLink to='/about' activeStyle={{ color: 'green' }}>
            <li>About</li>
          </NavLink>
          <NavLink to='/products' activeClassName='red'>
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
