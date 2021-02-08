import React from 'react';
import '../Style/bodyContentStyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cookbook from './Cookbook/Cookbook';
import Favorites from './Favorites';
import Pantry from './Pantry';
import Search from './Search';
import Settings from './Settings';
import Index from './Index';
import NewRecipe from './NewRecipe/NewRecipe';

class BodyContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            recipeData: []
        };
    }

    async componentDidMount() {
        const url = '/api/recipes/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ recipeData: data, loading: true});
    }

    render() {
        return(
            <div className="index">
                <Router>
                    <div className="sidebar">
                        <div className="sidenav">
                            <div className="">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <p></p>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-home"></i>
                                </Link>
                                <Link to="/cookbook" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-book"></i>
                                </Link>
                                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-heart"></i>
                                </Link>
                                <Link to="/pantry" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-shopping-basket"></i>
                                </Link>
                                <Link to="/search" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-search"></i>
                                </Link>
                                <Link to="/settings" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-fw fa-cog"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="page-content">
                        <Switch>
                            <Route path="/cookbook">
                                <Cookbook recipeData={this.state.recipeData} loading={this.state.loading} />
                            </Route>
                            <Route path="/favorites">
                                <Favorites />
                            </Route>
                            <Route path="/pantry">
                                <Pantry />
                            </Route>
                            <Route path="/search">
                                <Search />
                            </Route>
                            <Route path="/settings">
                                <Settings />
                            </Route>
                            <Route path="/new-recipe">
                                <NewRecipe />
                            </Route>
                            <Route path="/">
                                <Index />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default BodyContent;