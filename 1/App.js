import logo from './logo.svg';
import './App.css';
import Clock from './clock';
function App() {
  return (
      <div className="App">
        <Clock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to My React App!
        </p>
        <p>
          This is the user interface.
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
