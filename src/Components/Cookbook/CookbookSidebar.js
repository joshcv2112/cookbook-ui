import React from 'react';
import '../../Style/cookbookStyle.css';
import CookbookSelection from './CookbookSelection';
import CookbookTitle from './CookbookTitle';

class CookbookSidebar extends React.Component {
    render() {
        return (
            <div className='test'>
                <CookbookTitle />
                
                <CookbookSelection />
            </div>
        );
    }
}

export default CookbookSidebar;