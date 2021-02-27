import BodyContent from './Components/BodyContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="mainApp">
      <Router>
        <BodyContent/>
      </Router>
    </div>
  );
}

export default App;
