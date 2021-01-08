import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../../Style/cookbookStyle.css';

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

      setCurrentCookbook = (event, {value}) => {
          this.setState({currentCookbook: value});
      }      

    render() {
        return (
            <Dropdown
                id="thing"
                placeholder='Select Cookbook'
                fluid
                selection
                options={this.state.options}
                onChange={this.setCurrentCookbook}
                
            />
        );
    }
}

export default CookbookSelector;