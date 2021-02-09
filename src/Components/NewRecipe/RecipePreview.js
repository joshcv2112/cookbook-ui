import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
//import '../../Style/addRecipePageStyle.css';

class RecipePreview extends Component {
  render() {
    return(
        <div className="y">
            <div className="z">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.source}</p>
                <p>{this.props.url}</p>
                <p>{this.props.yield}</p>
            </div>
        </div>
    );
  }
}

export default RecipePreview;