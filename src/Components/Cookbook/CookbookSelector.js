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
                       currentCookbookId: null};
      }

      async componentDidMount() {
        const url = '/api/cookbooks/';
        const response = await fetch(url);
        const data = await response.json();

        var cookbooks = [];
        for (let i = 0; i < data.length; i++) {
            cookbooks.push({key: data[i].cookbookId, text: data[i].cookbookName, value: data[i].cookbookName});
        }
        this.setState({ options: cookbooks, loading: false, currentCookbookId: cookbooks[0].key});
      }

    setCurrentCookbook(value){
        for (let i = 0; i < this.state.options.length; i++)
        {
            if (this.state.options[i].text === value)
                this.setState({currentCookbookId: this.state.options[i].key});
        }
    }

    render() {
        return (
            <div>
                { this.state.loading ? <h1>loading...</h1> : 
                <div>
                <Dropdown
                    id="thing"
                    placeholder={this.props.defaultCookbook}
                    fluid
                    selection
                    options={this.props.cookbookData}
                    onChange={(e, { value }) => {
                        this.setCurrentCookbook(value)
                      }}
                />
                {this.state.cookbookId === null ? <h3>loading</h3> : <CookbookSelection cookbookId={this.state.currentCookbookId}/>}
                </div>
                }
            </div>
        );
    }
}

export default CookbookSelector;