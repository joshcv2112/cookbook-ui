import React, { Component } from 'react';
import '../Style/style.css';

class Cookbook extends Component {
  render() {
    return(
      <div>
        <div className='test'>
          <div className='sidebar-title-container'>
            <h2>Cookbook</h2>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Cookbook 1</button>
            <div className="dropdown-content">
              <a>Cookbook 1</a>
              <a>Cookbook 2</a>
              <a>Cookbook 3</a>
            </div>
          </div>
          <div className="container">
            <div className="one">
              <button className="dropbtn">Section 1</button>
            </div>
            <div className="two">
              <button className="dropbtn">Section 2</button>
            </div>
          </div>
        </div>
        <div className='main-cookbook'>
          <h2>Recipe</h2>
        </div>
      </div>
    );
  }
}

export default Cookbook;