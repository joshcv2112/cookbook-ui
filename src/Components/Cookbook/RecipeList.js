import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="two">
                <button className="dropbtn">Recipe 1</button>
                <button className="dropbtn-selected">Recipe 2</button>
                <button className="dropbtn">Recipe 3</button>
                <button className="dropbtn">Recipe 4</button>
            </div>
        );
    }
}

export default RecipeList;