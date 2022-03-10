import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Pages/Home/Navbar/Navbar';
import UserNavigation from './Components/Routes/UserNavigation';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
    <BrowserRouter>
        <UserNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
