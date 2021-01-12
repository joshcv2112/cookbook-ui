import React from 'react';
import '../../Style/cookbookStyle.css';

class CookbookSelection extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sections: "Loading",
            selctedSection: 0,
            rawData: null,
            loading: true,
            initial: this.props.cookbookId
        };
    }

    async componentDidMount()
    {
        const url = '/api/sections/cookbook/' + this.props.cookbookId;
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

    async updateCookbookData(id) {
        const url = '/api/sections/cookbook/' + id;
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

    async componentDidUpdate(prevProps) {
        if (prevProps.cookbookId !== this.props.cookbookId) {
          await this.updateCookbookData(this.props.cookbookId);
        }
      }

    changeColor(name){
        this.setState({loading: true})
        
        var data = this.state.rawData;
        var sections = [];
        for (let i = 0; i < data.length; i++) {
            if (name === data[i].sectionName)
                sections.push({name: data[i].sectionName, style: "dropbtn-selected"});
            else
                sections.push({name: data[i].sectionName, style: "dropbtn"});
        }

        this.setState({sections: sections, loading: false});
     }

    renderCookbookSections () {
        return <div>
            {this.state.sections.map(section => (
                <button className={section.style} key={section.name} onClick={this.changeColor.bind(this, section.name)}>{section.name}</button>
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
                    <div className="two">
                    <button className="dropbtn">Recipe 1</button>
                    <button className="dropbtn-selected">Recipe 2</button>
                    <button className="dropbtn">Recipe 3</button>
                    <button className="dropbtn">Recipe 4</button>
                </div>
            </div>
        );
    }
}

export default CookbookSelection;