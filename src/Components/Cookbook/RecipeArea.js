import React from 'react';
import RecipeIcons from './RecipeIcons';
import RecipePath from './RecipePath';
import RecipeContent from './RecipeContent';
import '../../Style/cookbookStyle.css';

class RecipeArea extends React.Component {
    render() {
        return (
            <div className="y">
          <div className="z">
            <RecipeIcons />
            <RecipePath />
            <RecipeContent />
          </div>
        </div>
        );
    }
}

export default RecipeArea;