import logo from './logo.svg';
import './App.css';

function App() {
  const test = process.env.REACT_APP_TEST_ALGO || 'no hay env :(';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ==>  {test}
        </a>
      </header>
    </div>
  );
}

export default App;
