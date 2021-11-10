import React, { Component } from 'react';

import './Projects.css';
import SistersUnited from './projects/SistersUnited';

export class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Projects</h1>
        <div className='project'>
          <div class='su-container'>
            <SistersUnited />
          </div>
          <div>
            <h2>Github Finder</h2>
            <p>Stuff about project</p>
            <button>Find out more</button>
          </div>
          <div class='p3-container'>
            <h2>Prj 3</h2>
            <p>Stuff about project</p>
            <button>Find out more</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
