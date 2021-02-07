import React from 'react';
import '../../Style/cookbookStyle.css';
import CookbookSelector from './CookbookSelector';
import CookbookTitle from './CookbookTitle';

class CookbookSidebar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loading: false,
                       cookbookData: [{key: 1, text: '', value: 1}],
                       currentCookbook: null,
                       allCookbookData: null};
    }

    render() {
        return (
            <div className='test'>
                {this.state.loading ?  <div></div> :
                    <div>
                        <CookbookTitle />
                        <CookbookSelector />
                    </div>
                }
            </div>
        );
    }
}

export default CookbookSidebar;