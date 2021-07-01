// https://www.freecodecamp.org/news/react-beginner-handbook/#managingstateinreact
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import CounterWithNameAndSideEffect from './components/CounterWithNameAndSideEffect'

const message = 'Hello'

function App() {
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
          Learn React
        </a>

        <Welcome
          name='Budi'
        >
          <span>ini children</span>
        </Welcome>

        <p>
          {message === 'Hello' ? 'Message is Hello' : message}
        </p>

        <Counter />

        <CounterWithNameAndSideEffect />
      </header>
    </div>
  );
}

export default App;
