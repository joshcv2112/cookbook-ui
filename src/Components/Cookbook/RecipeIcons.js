import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipeIcons extends React.Component {
    render() {
        return (
            <div className="recipe-icon-area">
              <span className="recipe-icon"><i className="fa fa-pencil" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-expand" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-balance-scale" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-share-alt" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-print" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-trash" aria-hidden="true"></i></span>
              <span className="recipe-icon"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
            </div>
        );
    }
}

export default RecipeIcons;