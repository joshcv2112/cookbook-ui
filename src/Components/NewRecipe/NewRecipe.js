import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
import '../../Style/addRecipePageStyle.css';
import CookbookTitle from '../Cookbook/CookbookTitle';
import RecipePreview from './RecipePreview';

class NewRecipe extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: "",
            recipeDescription: "",
            recipeSource: "",
            recipeUrl: "",
            recipeYield: ""
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateSource = this.updateSource.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateYield = this.updateYield.bind(this);
    }    

    updateTitle(e) { this.setState({recipeTitle: e.target.value}); }
    updateDescription(e) { this.setState({recipeDescription: e.target.value}); }
    updateSource(e) { this.setState({recipeSource: e.target.value}); }
    updateUrl(e) { this.setState({recipeUrl: e.target.value}); }
    updateYield(e) { this.setState({recipeYield: e.target.value}); }

    render() {
        return(
            <div className="parent">
                <div className='test'>
                    <CookbookTitle />
                    <div className='sidebar-container'>
                        <div className="sidebar-header">Import a recipe from:</div>
                        <div className="button-container">
                            <button className="button1">Website</button>
                            <button className="button2">Text</button>
                        </div>
                        <div className="sidebar-header">Or enter one below</div>
                        <div className="input-container">
                            <div>title</div>
                            <div>
                                <input className="input" value={this.state.recipeTitle} onChange={this.updateTitle} />
                            </div>
                        </div>
                        <div className="button-container2">
                            <button className="button3">ADD INGREDIENTS</button>
                        </div>
                        <div className="button-container2">
                            <button className="button3">ADD STEPS</button>
                        </div>
                        <div className="button-container3">
                            <button className="button4">ADD IMAGE</button>
                            <button className="button4">ADD VIDEO</button>
                        </div>
                        <div className="button-container2">
                            <button className="button3">ADD COOKING TIME</button>
                        </div>
                        <div>
                            <label className="about-label">About the recipe</label>
                        </div>
                        <div>
                            <div>description</div>
                            <input className="input" value={this.state.recipeDescription} onChange={this.updateDescription} />
                        </div>
                        <div>
                            <div>source</div>
                            <input className="input" value={this.state.recipeSource} onChange={this.updateSource} />
                        </div>
                        <div>
                            <div>url</div>
                            <input className="input" value={this.state.recipeUrl} onChange={this.updateUrl} />
                        </div>
                        <div>
                            <div>yield</div>
                            <input className="input" value={this.state.recipeYield} onChange={this.updateYield} />
                        </div>
                        <div className="button-container4">
                            <button className="cancel-button">CANCEL</button>
                            <button className="save-button">SAVE RECIPE</button>
                        </div>
                    </div>
                </div>
                <RecipePreview title={this.state.recipeTitle} description={this.state.recipeDescription} source={this.state.recipeSource} url={this.state.recipeUrl} yield={this.state.recipeYield} />
            </div>
        );
  }
}

export default NewRecipe;