import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSection : 1,
            loading: true,
            rawData: null,
            recipes: null
        };
    }

    async getRecipeData(url) {
        const response = await fetch(url);
        const data = await response.json();

        var recipes = [];
        for (let i = 0; i < data.length; i++) {
            recipes.push({name: data[i].title, style: "dropbtn"});
        }

        this.setState({loading: false, recipes: recipes, rawData: data})
    }

    async componentDidMount() {
        await this.getRecipeData('/api/recipes/section/' + this.state.selectedSection);
    }

    updateRecipeStyle(name) {
        
    }

    renderRecipes() {
        // return <button className="dropbtn">Done Loading</button>;
        return <div>
            {this.state.recipes.map(recipe => (
                <button className={recipe.style} key={recipe.name} onClick={this.updateRecipeStyle.bind(this, recipe.name)}>{recipe.name}</button>
            ))}
        </div>;
    }

    render() {
        return (
            <div className="two">
                {this.state.loading ? <button className="dropbtn">Loading...</button> : 
                    this.renderRecipes()}
                <button className="dropbtn">{this.state.selectedSection}</button>
                <button className="dropbtn">Recipe 1</button>
                <button className="dropbtn-selected">Recipe 2</button>
                <div className="add-section-button">Add Recipe</div>
            </div>
        );
    }
}

export default RecipeSelector;

