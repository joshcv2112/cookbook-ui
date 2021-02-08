import React, { Component } from 'react';
import '../../Style/cookbookStyle.css';
import '../../Style/addRecipePageStyle.css';
import CookbookTitle from '../Cookbook/CookbookTitle';

class NewRecipe extends Component {
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
                        <div><input className="input"/></div>
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
                    <div>
                        <div><input className="input2" /></div>
                    </div>
                </div>
                <div>
                    <div>source</div>
                    <div>
                        <div><input className="input2" /></div>
                    </div>
                </div>
                <div>
                    <div>url</div>
                    <div>
                        <div><input className="input2" /></div>
                    </div>
                </div>
                <div>
                    <div>yield</div>
                    <div>
                        <div><input className="input2" /></div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="cancel-button">CANCEL</button>
                    <button className="save-button">SAVE RECIPE</button>
                </div>
            </div>
        </div>
        <div className="y">
          <div className="z">
            <h3>Recipe Preview Area</h3>
            <h3>Recipe Preview Area</h3>
            <h3>Recipe Preview Area</h3>
            <h3>Recipe Preview Area</h3>
            <h3>Recipe Preview Area</h3>
            <h3>Recipe Preview Area</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;