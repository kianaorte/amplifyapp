import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Projects</h1>
        <div className='project'>
          <div>
            <h2>Sisters United</h2>
            <p>Stuff about project</p>
            <button>Find out more</button>
          </div>
          <div>
            <h2>Github Finder</h2>
            <p>Stuff about project</p>
            <button>Find out more</button>
          </div>
          <div>
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
