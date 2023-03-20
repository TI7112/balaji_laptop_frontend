import { Routes , Route} from 'react-router-dom'
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import ProductViews from './pages/ProductViews';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/categories/:id' element={<Categories />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/products/:id' element={<ProductViews />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    
  );
}

export default App;
