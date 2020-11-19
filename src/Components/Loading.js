import React, { Component } from 'react';
import '../Style/style.css';

class Loading extends Component {
  render() {
    return(
        <div className='main'>
            <p>Fetching data...</p>
        </div>
    );
  }
}

export default Loading;