import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Gotomenu from "./Pages/Gotomenu";   
import Mainpage from './Pages/Mainpage';
import Cart from './Components/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/gotomenu' element={<Gotomenu/>}/>
      <Route path='mainpage' element={<Mainpage/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
