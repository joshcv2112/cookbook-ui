import React, { Component } from 'react';
import '../Style/style.css';
import Loading from './Loading';
import RecipeCard from './RecipeCard';

class Cookbook extends Component {
  render() {
    return(
        <div className='main'>
        { 
          this.props.loading ?
            (
              this.props.recipeData.map(recipe => (
                <RecipeCard recipe={recipe} />
              ))
            ) :
            (<Loading />) 
        }
        </div>
    );
  }
}

export default Cookbook;