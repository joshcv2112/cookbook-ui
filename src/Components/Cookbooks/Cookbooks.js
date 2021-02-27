import React from 'react';
import {
    Switch,
    Route,
    Link,
    useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import '../../Style/cookbookStyle.css';

const COOKBOOKS = {
    0: {
      title: 'Holiday Favorites'
    },
    1: {
      title: 'Quick and Easy Dinners'
    },
    2: {
      title: 'Instant Pot Recipes'
    },
    3: {
      title: 'Summer Favorites'
    },
  };

class Cookbooks extends React.Component {
    render() {
        return(
            <>
              <div className="test">
                <h2>Cookbooks</h2>
                <Dropdown text='Cookbook'>
                  <Dropdown.Menu>
                    {Object.keys(COOKBOOKS).map(key => (
                        <Link to={`/cookbooks/${key}`}>
                            <Dropdown.Item text={COOKBOOKS[key].title} />
                        </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Switch>
                  <Route exact path="/" element={<NullCookbook />} />
                  <Route path="/:id/*" element={<Cookbook />}/>
              </Switch>
            </>
        );
    }
}

export default Cookbooks;

const NullCookbook = () => (
    <>
      <h4>No Cookbook found</h4>
    </>
);

const Cookbook = () => {
    const { id } = useParams();
  
    return (
      <>
        <h1>yooo</h1>
      </>
    );
  };