import React from 'react';
import '../Style/style.css';
import { GiKnifeFork } from 'react-icons/gi';
import { BiBook, BiBookHeart, BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { BsCardChecklist } from 'react-icons/bs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cookbook from './Cookbook';
import Favorites from './Favorites';
import Pantry from './Pantry';
import Search from './Search';
import Settings from './Settings';
import Index from './Index';


class BodyContent extends React.Component {
    
    // These two things probably belong in the child component. IDK best practice tho
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            recipeData: []
        };
    }

    // state = {
    //     recipeData: null
    // };

    async componentDidMount() {
        const url = '/api/recipes/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ recipeData: data, loading: true});
    }

    render() {
        var logoSize = 45;
        var iconSize = 25;
        return(
            <Router>
                <div>                
                    <nav className='navbar'>
                        <ul className='navbar-nav'>
                            <li className="logo">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <span className="link-text logo-text">
                                            Recipes
                                        </span>
                                    <GiKnifeFork size={logoSize} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cookbook" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <BiBook size={iconSize}/>
                                        <span className="link-text">
                                            Cookbook
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <BiBookHeart size={iconSize}/>
                                        <span className="link-text">
                                            Favorites
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pantry" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <BsCardChecklist size={iconSize}/>
                                        <span className="link-text">
                                            Pantry
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <BiSearch size={iconSize}/>
                                        <span className="link-text">
                                            Search
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item" id="themeButton">
                                <Link to="/settings" style={{ textDecoration: 'none' }}>
                                    <div className="nav-link">
                                        <FiSettings size={iconSize}/>
                                        <span className="link-text">
                                            Settings
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    
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
                        <Route path="/">
                            <Index />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BodyContent;