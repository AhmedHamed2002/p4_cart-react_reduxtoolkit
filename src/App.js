import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import Products from './Components/Products';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
