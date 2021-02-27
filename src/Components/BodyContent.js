import React from 'react';
import '../Style/bodyContentStyle.css';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cookbook from './Cookbook/Cookbook';
import Cookbooks from './Cookbooks/Cookbooks';
import Favorites from './Favorites';
import Pantry from './Pantry';
import Search from './Search';
import Settings from './Settings';
import Index from './Index';
import NewRecipe from './NewRecipe/NewRecipe';

class BodyContent extends React.Component {
    render() {
        return(
            <div className="index">
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
                            <Link to="/cookbooks/" style={{ textDecoration: 'none' }}>
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
                        <Route exact path="/" component={Index} />
                        <Route path="/cookbooks/" component={Cookbooks} />
                        <Route path="/cookbooks/*" component={Cookbooks} />
                        <Route path="/cookbook" component={Cookbook} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/pantry" component={Pantry} />
                        <Route path="/search" component={Search} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/new-recipe" component={NewRecipe} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default BodyContent;