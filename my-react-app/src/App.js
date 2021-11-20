import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavTabs />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <AboutMe />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
