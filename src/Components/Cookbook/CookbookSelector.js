import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../../Style/cookbookStyle.css';
import CookbookSelection from './CookbookSelection';

class CookbookSelector extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { recipeData: null,
                       loading: true ,
                       options: [{key: 1, text: 'Loading...', value: 1}],
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
        this.setState({ options: cookbooks, loading: false });
      }

    render() {
        return (
            <div>
                <Dropdown
                    id="thing"
                    placeholder={this.props.defaultCookbook}
                    fluid
                    selection
                    options={this.props.cookbookData}
                    onChange={this.props.setCurrentCookbook}
                />
                <CookbookSelection />
            </div>
        );
    }
}

export default CookbookSelector;