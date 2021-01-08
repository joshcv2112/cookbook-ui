import React from 'react';
import '../../Style/cookbookStyle.css';

class RecipeContent extends React.Component {
    render() {
        return (
            <div className="recipe-content-area">
              <h1 className="recipe-title">Thai Grilled Chicken Wings</h1>
              <p className="recipe-description">The tangy dipping sauce is great with pretty much any grilled meat. Keep it on heavy rotation this summer.</p>
              <div className="rating">
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star rating-star"></span>
                <span className="fa fa-star-o rating-star"></span>
              </div>
              <img className="recipe-image" src="https://mysaffronappgc.imgix.net/1600060538618-SUGZYMWGa.jpg?max-h=800&max-w=1600&fit=crop&auto=compress&ixlib=js-2.3.1&s=ad3752bb81ee377c15c37da76d42cc03"/>
              <div className="author-servings-notes-region">
                <div className="asnr-child">
                  <div className="author-name-container">
                    <a href="https://www.google.com" className="author-name"><b>Kris Yenbamroong</b></a>
                  </div>
                  <div className="servings-label">4 Servings</div>
                </div>
                <div className="asnr-child">
                  <button className="add-note-button">Add Note</button>
                </div>
              </div>
              <div className="recipe-directions-region">
                <div className="ingredients">
                  <div className="ingredient"><b>6</b> dried chiles de árbol</div>
                  <div className="ingredient"><b>1/3 cup</b> fish sauce</div>
                  <div className="ingredient"><b>1 tablespoon</b> fresh lime juice</div>
                  <div className="ingredient"><b>1 tablespoon</b> toasted sesame seeds</div>
                  <div className="ingredient"><b>2 teaspoons</b> sugar</div>
                  <div className="ingredient"><b>1/2 cup</b> oyster sauce</div>
                  <div className="ingredient"><b>1/2 cup</b> Thai thin soy sauce</div>
                  <div className="ingredient"><b>2 tablespoons</b> sugar</div>
                  <div className="ingredient"><b>2 tablespoons</b> vegetable oil</div>
                  <div className="ingredient"><b>2 teaspoons</b> freshly ground black pepper</div>
                  <div className="ingredient"><b>2 pounds</b> chicken wings, tips removed, drumettes and flats separated</div>
                  <div className="ingredient">A spice mill or a mortar and pestle; twelve 8" bamboo skewers soaked in water at least 1 hour</div>
                </div>
                <div className="directions">
                  <div className="direction">
                    <p>Dipping Sauce: Grind chiles in spice mill to a fine powder. Mix chile powder, fish sauce, lime juice, sesame seeds, and sugar in a medium bowl to dissolve sugar. Adjust with more sugar or lime juice if needed.</p>
                  </div>
                  <div className="direction">
                    <p>Wings and Assembly: Prepare grill for medium-high heat. Combine oyster and soy sauces, sugar, oil, and pepper in a large bowl. Add wings; toss to coat. Let sit 20–30 minutes (if allowed to marinate longer, they’ll be too salty). Thread 2 flat pieces onto each skewer on a diagonal, spacing about ½" apart. Grill along with drumettes, turning occasionally, until lightly charred and cooked through, 6–8 minutes. Serve with dipping sauce.</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default RecipeContent;