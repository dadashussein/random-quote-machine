
import './App.css';
import Quote from './component/Quote';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div>
     <Quote />
    </div>
    </BrowserRouter>
  );
}

export default App;
