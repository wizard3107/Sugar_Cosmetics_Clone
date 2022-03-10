import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import UserNavigation from './Components/Routes/UserNavigation';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
    <BrowserRouter>
        <UserNavigation/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
