import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
import CookbookSelector from './CookbookSelector';
import RecipeArea from './RecipeArea';
import CookbookSidebar from './CookbookSidebar';

class Cookbook extends Component {
  render() {
    return(
      <div className="parent">
        <CookbookSidebar />
        <div className='test'>
          <div className='sidebar-title-container'>
            <h2>Cookbook</h2>
          </div>
          <CookbookSelector />
          <div className="container">
            <div className="one">
              <button className="dropbtn-selected">First Section</button>
              <button className="dropbtn">Another Section</button>
              <div className="add-section-button">Add Section</div>
            </div>
            <div className="two">
              <button className="dropbtn-selected">Section 2</button>
            </div>
          </div>
        </div>
        <RecipeArea />
      </div>
    );
  }
}

export default Cookbook;