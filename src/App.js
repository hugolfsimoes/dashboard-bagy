import './App.css';
import Board from './components/Board';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Board />
      </BrowserRouter>
    </div>
  );
}

export default App;
