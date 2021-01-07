import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
import RecipeArea from './RecipeArea';
import CookbookSidebar from './CookbookSidebar';

class Cookbook extends Component {
  render() {
    return(
      <div className="parent">
        <CookbookSidebar />
        <RecipeArea />
      </div>
    );
  }
}

export default Cookbook;