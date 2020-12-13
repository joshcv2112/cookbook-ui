import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import '../Style/cookbookStyle.css';

class CookbookSelector extends React.Component {
    render() {
        const options = [
            { key: 1, text: 'Cookbook 1', value: 1 },
            { key: 2, text: 'Cookbook 2', value: 2 },
            { key: 3, text: 'Cookbook 3', value: 3 },
          ]

        return (
            <Menu id="thing">
                <Dropdown text='Cookbooks' options={options} simple item />
            </Menu>
        );
    }
}

export default CookbookSelector;