import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <ProductListing /> } />
          <Route path="/product/:productId" element={ <ProductDetails /> } />
          <Route>404 not found !</Route>
        </Routes>

      </BrowserRouter>   
    </div>
  );
}

export default App;
