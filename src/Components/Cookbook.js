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
              <div className="rating">
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star-o rating-star"></span>
              </div>
              <img className="recipe-image" src="https://mysaffronappgc.imgix.net/1600060538618-SUGZYMWGa.jpg?max-h=800&max-w=1600&fit=crop&auto=compress&ixlib=js-2.3.1&s=ad3752bb81ee377c15c37da76d42cc03"/>
              <div className="author-servings-notes-region">
                <div className="asnr-child">
                  <div className="author-name-container">
                    <a href="https://www.google.com" className="author-name"><b>Kris Yenbamroong</b></a>
                  </div>
                  <div className="servings-label">4 Servings</div>
                </div>
                <div className="asnr-child">
                  <button className="add-note-button">Add Note</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;