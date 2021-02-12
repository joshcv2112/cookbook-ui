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
            recipeYield: "",
            recipeIngredients: [],
            recipeSteps: [],
            imageUrl: ""
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateSource = this.updateSource.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateYield = this.updateYield.bind(this);

        this.addIngredients = this.addIngredients.bind(this);
        this.addSteps = this.addSteps.bind(this);
        this.addImage = this.addImage.bind(this);
    }    

    updateTitle(e) { this.setState({recipeTitle: e.target.value}); }
    updateDescription(e) { this.setState({recipeDescription: e.target.value}); }
    updateSource(e) { this.setState({recipeSource: e.target.value}); }
    updateUrl(e) { this.setState({recipeUrl: e.target.value}); }
    updateYield(e) { this.setState({recipeYield: e.target.value}); }

    addIngredients(e) { 
        // Of course this will come from a pop up dialog later on...
        let ingredients = ["6 dried chiles de árbol","1/3 cup fish sauce","1 tablespoon fresh lime juice","1 tablespoon toasted sesame seeds","2 teaspoons sugar","1/2 cup oyster sauce","1/2 cup Thai thin soy sauce","2 tablespoons sugar","2 tablespoons vegetable oil","2 teaspoons freshly ground black pepper","2 pounds chicken wings, tips removed, drumettes and flats separated","A spice mill or a mortar and pestle; twelve 8\" bamboo skewers soaked in water at least 1 hour"];
        this.setState({recipeIngredients: ingredients}) 
    }
    addSteps() {
        // Of course this will come from a pop up dialog later on as well...
        let steps = ["Dipping Sauce: Grind chiles in spice mill to a fine powder. Mix chile powder, fish sauce, lime juice, sesame seeds, and sugar in a medium bowl to dissolve sugar. Adjust with more sugar or lime juice if needed.", "Wings and Assembly: Prepare grill for medium-high heat. Combine oyster and soy sauces, sugar, oil, and pepper in a large bowl. Add wings; toss to coat. Let sit 20–30 minutes (if allowed to marinate longer, they’ll be too salty). Thread 2 flat pieces onto each skewer on a diagonal, spacing about ½\" apart. Grill along with drumettes, turning occasionally, until lightly charred and cooked through, 6–8 minutes. Serve with dipping sauce."];
        this.setState({recipeSteps: steps});
    }
    addImage(e) {
        let url = "https://mysaffronappgc.imgix.net/1600060538618-SUGZYMWGa.jpg?max-h=800&max-w=1600&fit=crop&auto=compress&ixlib=js-2.3.1&s=ad3752bb81ee377c15c37da76d42cc03";
        this.setState({imageUrl: url});
    }

    render() {
        return(
            <div className="parent2">
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
                            <button className="button3" onClick={this.addIngredients}>ADD INGREDIENTS</button>
                        </div>
                        <div className="button-container2">
                            <button className="button3" onClick={this.addSteps}>ADD STEPS</button>
                        </div>
                        <div className="button-container3">
                            <button className="button4" onClick={this.addImage}>ADD IMAGE</button>
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
                <RecipePreview title={this.state.recipeTitle} description={this.state.recipeDescription}
                               source={this.state.recipeSource} url={this.state.recipeUrl} yield={this.state.recipeYield}
                               ingredients={this.state.recipeIngredients} steps={this.state.recipeSteps} 
                               image={this.state.imageUrl} />
            </div>
        );
  }
}

export default NewRecipe;