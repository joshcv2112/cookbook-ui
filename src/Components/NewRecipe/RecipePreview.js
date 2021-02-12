import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
import '../../Style/addRecipePageStyle.css';

class RecipePreview extends Component {
  render() {
    return(
        <div className="y">
            <div className="z">
                <div className="recipe-content-area">
                    <div className="preview-header-parent">
                        <div className="preview-header">Recipe Preview</div>
                    </div>
                    {this.props.title !== "" ? <h1 className="recipe-title">{this.props.title}</h1> : <div></div>}
                    <p className="recipe-description">{this.props.description}</p>
                    <img className="recipe-image" src={this.props.image} alt={this.props.image}/>
                    <div className="author-servings-notes-region">
                        <div className="asnr-child">
                        <div className="author-name-container">
                            <a href="https://www.google.com" className="author-name"><b>{this.props.source}</b></a>
                        </div>
                            <div className="servings-label">{this.props.yield}</div>
                        </div>
                    </div>
                    <div className="recipe-directions-region">
                        <div className="ingredients">
                            {/* Make the measurement portion of each ingredient bold <b></b> */}
                            {this.props.ingredients.map((ingredient, index) => (
                                <div className="ingredient" key={index}>{ingredient}</div>
                            ))}
                        </div>
                        <div className="directions">
                            {/* Improve spacing between each <p> tag */}
                            {this.props.steps.map((step, index) => (
                            <div className="direction" key={index}>
                                <p>{step}</p>
                            </div>        
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default RecipePreview;