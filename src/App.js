import './App.css';
import BoardContent from './components/BoardContent';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <BoardContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
