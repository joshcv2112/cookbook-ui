import React from 'react';
import '../../Style/cookbookStyle.css';
import RecipeList from './RecipeList';

class SectionSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: "Loading",
            selctedSection: 0,
            rawData: null,
            loading: true
        };
    }

    async getRecipeData(url) {
        const response = await fetch(url);
        const data = await response.json();

        var sections = [];
        for (let i = 0; i < data.length; i++) {
                if (i === this.state.selctedSection)
                    sections.push({name: data[i].sectionName, style: "dropbtn-selected"});
                else
                    sections.push({name: data[i].sectionName, style: "dropbtn"});
        }
        this.setState({ rawData: data, sections: sections, loading: false});
    }

    async componentDidMount() {
        await this.getRecipeData('/api/sections/cookbook/' + this.props.cookbookId);
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.cookbookId !== this.props.cookbookId) {
          await this.getRecipeData('/api/sections/cookbook/' + this.props.cookbookId);
        }
      }

    updateSectionListStyle(name) {
        var sections = [];
        for (let i = 0; i < this.state.rawData.length; i++) {
            if (name === this.state.rawData[i].sectionName)
                sections.push({name: this.state.rawData[i].sectionName, style: "dropbtn-selected"});
            else
                sections.push({name: this.state.rawData[i].sectionName, style: "dropbtn"});
        }
        return sections;
    }

    updateSectionStyle(name){
        this.setState({sections: this.updateSectionListStyle(name), loading: false});
     }

    renderCookbookSections () {
        return <div>
            {this.state.sections.map(section => (
                <button className={section.style} key={section.name} onClick={this.updateSectionStyle.bind(this, section.name)}>{section.name}</button>
            ))}
          </div>;
    }  

    render() {
        return (
            <div className="container">
                <div className="one">
                    {this.state.loading ? <button className="dropbtn-selected">Loading</button> : 
                        this.renderCookbookSections()}
                    <div className="add-section-button">Add Section</div>
                </div>
                <RecipeList />
            </div>
        );
    }
}

export default SectionSelection;