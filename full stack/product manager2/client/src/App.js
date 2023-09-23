import './App.css';
import ProductForm from './components/ProductForm';
import Product from './components/Product';
import ProductList from './components/ProductList';
import {Routes , Route} from 'react-router-dom'
import Editproduct from './components/Editproduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<ProductForm/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/product/edit/:id" element={<Editproduct/>}/>
      </Routes>
    </div>
  );
}

export default App;

