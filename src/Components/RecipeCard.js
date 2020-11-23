import React, { Component } from 'react';
import '../Style/recipeStyle.css';

class RecipeCard extends Component {
  
  renderTitle(title) {
    if (title.length <= 35) {
      return title;
    } else {
      return title.substr(0,35) + "...";
    }
  }
  
  render() {
    return(
        <div className="card-container">
          <div className="card u-clearfix">
            <div className="card-body">
              <span className="card-number card-circle subtle">01</span>
              <span className="card-author subtle">John Smith</span>
              <h2 className="card-title">{this.renderTitle(this.props.recipe.title)}</h2>
              <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
              <div className="card-read">Read</div>
              <span className="card-tag card-circle subtle">C</span>
            </div>
            <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" className="card-media" />
          </div>
          <div className="card-shadow"></div>
        </div>
    );
  }
}

export default RecipeCard;



