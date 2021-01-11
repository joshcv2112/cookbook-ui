import React from 'react';
import '../../Style/cookbookStyle.css';
import CookbookSelection from './CookbookSelection';
import CookbookSelector from './CookbookSelector';
import CookbookTitle from './CookbookTitle';

class CookbookSidebar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { recipeData: null,
                       loading: true ,
                       cookbookData: [{key: 1, text: 'Loading...', value: 1}],
                       currentCookbook: null};
    }

    async componentDidMount() {
        const url = '/api/cookbooks/';
        const response = await fetch(url);
        const data = await response.json();

        var i;
        var cookbooks = [];
        for (i = 0; i < data.length; i++) {
            cookbooks.push({key: data[i].cookbookId, text: data[i].cookbookName, value: data[i].cookbookName});
        }
        this.setState({ currentCookbook: data[0].cookbookName, cookbookData: cookbooks, loading: false });
    }
    
    setCurrentCookbook = (event, {value}) => {
        this.setState({currentCookbook: value});
    }

    render() {
        return (
            <div className='test'>
                {this.state.loading ?  <h1>LOADING</h1> :
                    <div>
                        <CookbookTitle />
                        <CookbookSelector defaultCookbook={this.state.currentCookbook} cookbookData={this.state.cookbookData} setCookbook={this.setCurrentCookbook}/>
                        <CookbookSelection />
                    </div>
                }
            </div>
        );
    }
}

export default CookbookSidebar;