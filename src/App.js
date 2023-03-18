import { Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    
  );
}

export default App;
