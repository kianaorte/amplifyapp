import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Link to='/'>
          <h2>Kiana Ortega</h2>
        </Link>
        <ul>
          <li>
            <Link to='/projects'> Projects</Link>
          </li>
          <li>
            <a href='Kiana_CV.pdf' download>
              CV
            </a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
