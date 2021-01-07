import React from 'react';
import '../../Style/cookbookStyle.css';
import CookbookSelection from './CookbookSelection';
import CookbookSelector from './CookbookSelector';
import CookbookTitle from './CookbookTitle';

class CookbookSidebar extends React.Component {
    render() {
        return (
            <div className='test'>
                <CookbookTitle />
                <CookbookSelector />
                <CookbookSelection />
            </div>
        );
    }
}

export default CookbookSidebar;