import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRecipeNum : 1,
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
            if (i === this.state.selectedRecipeNum)
                recipes.push({name: data[i].title, style: "dropbtn-selected"});
            else
                recipes.push({name: data[i].title, style: "dropbtn"});
        }

        this.setState({loading: false, recipes: recipes, rawData: data})
    }

    async componentDidMount() {
        await this.getRecipeData('/api/recipes/section/' + this.state.selectedRecipeNum);
    }

    updateRecipeListStyle(name) {
        var recipes = [];
        for (let i = 0; i < this.state.rawData.length; i++) {
            if (name === this.state.rawData[i].title)
                recipes.push({name: this.state.rawData[i].title, style: "dropbtn-selected"});
            else
                recipes.push({name: this.state.rawData[i].title, style: "dropbtn"});
        }
        return recipes;
    }

    updateRecipeStyle(name) {
        this.setState({recipes: this.updateRecipeListStyle(name), loading: false});
    }

    renderRecipes() {
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
                <div className="add-section-button">Add Recipe</div>
            </div>
        );
    }
}

export default RecipeSelector;

