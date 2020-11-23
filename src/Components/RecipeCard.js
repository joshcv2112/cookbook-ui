import React, { Component } from 'react';
import '../Style/style.css';

class RecipeCard extends Component {
  render() {
    return(
        <div>
            <h3>{this.props.recipe.title}</h3>
        </div>
    );
  }
}

export default RecipeCard;



