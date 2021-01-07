import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipePath extends React.Component {
    render() {
        return (
            <div className="recipe-path-area">
              <span className="recipe-path">First Cookbook / First Section</span>
              <span className="recipe-icon">+</span>
            </div>
        );
    }
}

export default RecipePath;