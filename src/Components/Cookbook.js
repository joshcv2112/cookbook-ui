import React, { Component } from 'react';
import '../Style/style.css';
import Loading from './Loading';

class Cookbook extends Component {
  render() {
    return(
        <div className='main'>
            { this.props.loading ?
                (<p>{JSON.stringify(this.props.recipeData)}</p>) :
                (<Loading />) }
        </div>
    );
  }
}

export default Cookbook;