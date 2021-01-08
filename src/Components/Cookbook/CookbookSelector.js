import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import '../../Style/cookbookStyle.css';

class CookbookSelector extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { recipeData: null, loading: true , options: [{key: 1, text: 'Loading...', value: 1}]};
      }

      async componentDidMount() {
        const url = '/api/cookbooks/';
        const response = await fetch(url);
        const data = await response.json();

        var i;
        var cookbooks = [];
        for (i = 0; i < data.length; i++) {
            cookbooks.push({key: i+1, text: data[i].cookbookName, value: 1});
        }
        this.setState({ options: cookbooks, loading: false });
      }

      

    render() {
        return (
            <Menu id="thing">
                <Dropdown text='Cookbooks' options={this.state.options} simple item />
            </Menu>
        );
    }
}

export default CookbookSelector;