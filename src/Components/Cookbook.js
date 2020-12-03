import React, { Component } from 'react';
import '../Style/cookbookStyle.css';

class Cookbook extends Component {
  render() {
    return(
      <div className="parent">
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
        <div className="y">
          <div className="z">
            <div className="recipe-icon-area">
              <span className="recipe-icon"><i className="fa fa-pencil" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-expand" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-balance-scale" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-share-alt" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-print" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-trash" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
            </div>
            <div className="recipe-path-area">
              <span className="recipe-path">First Cookbook / First Section</span>
              <span className="recipe-icon">+</span>
            </div>
            <div className="recipe-content-area">
              <h1 className="recipe-title">Thai Grilled Chicken Wings</h1>
              <p className="recipe-description">The tangy dipping sauce is great with pretty much any grilled meat. Keep it on heavy rotation this summer.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;