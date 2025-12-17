
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
import { ProductList } from './Components/Product/ProductList';

function App() {
  return (
    <>
      <div>
   <Navbar/>
   <ProductList/>
   </div>
   {/* <Footer/> */}
    </>
  );
}

export default App;
