import './App.css';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Navbar />
        </header>
      </div>
      <div className='quote-container'>
        <body>
          <Quote />
        </body>
      </div>
    </div>
  );
}

export default App;
