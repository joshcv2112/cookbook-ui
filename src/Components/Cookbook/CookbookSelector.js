import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../../Style/cookbookStyle.css';
import SectionSelection from './SectionSelector';

class CookbookSelector extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loading: true ,
                       defaultCookbook: null,
                       options: [{key: 1, text: 'Loading...', value: 1}],
                       currentCookbook: null,
                       name: "def"};
      }

    async componentDidMount() {
        const url = '/api/cookbooks/';
        const response = await fetch(url);
        const data = await response.json();

        var cookbooks = [];
        for (let i = 0; i < data.length; i++) {
            cookbooks.push({key: data[i].cookbookId, text: data[i].cookbookName, value: data[i].cookbookName});
        }
        this.setState({ defaultCookbook: data[0].cookbookName, options: cookbooks, loading: false, currentCookbookId: cookbooks[0].key});
    }

    setCurrentCookbook(value){
        for (let i = 0; i < this.state.options.length; i++)
        {
            if (this.state.options[i].text === value)
                this.setState({currentCookbookId: this.state.options[i].key, name: value});
        }
    }

    render() {
        return (
            <div>
                { this.state.loading ? <div></div> : 
                <div>
                <Dropdown
                    id="thing"
                    placeholder={this.state.defaultCookbook}
                    fluid
                    selection
                    options={this.state.options}
                    onChange={(e, { value }) => {
                        this.setCurrentCookbook(value)
                      }}
                />
                {this.state.cookbookId === null ? <h3>loading</h3> : <SectionSelection cookbookId={this.state.currentCookbookId} name={this.state.name}/>}
                </div>
                }
            </div>
        );
    }
}

export default CookbookSelector;