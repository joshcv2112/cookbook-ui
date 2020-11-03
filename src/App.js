import './App.css';
import NavBar from './Components/NavBar';

// For the UI I'm taking inspiration from here: https://www.osleague.tools/#/

function App() {
  return (
    <div className="mainApp">
      <NavBar />
      <div className="test">
        <p>some text</p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
