import './App.css';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <Navbar />
        </header>
        <Quote />
      </body>
    </div>
  );
}

export default App;
