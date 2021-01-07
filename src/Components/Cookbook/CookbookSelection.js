import React from 'react';
import '../../Style/cookbookStyle.css';

class CookbookSelection extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="one">
                    <button className="dropbtn-selected">First Section</button>
                    <button className="dropbtn">Another Section</button>
                    <div className="add-section-button">Add Section</div>
                </div>
                    <div className="two">
                    <button className="dropbtn-selected">Section 2</button>
                </div>
            </div>
        );
    }
}

export default CookbookSelection;