import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import Product from './pages/Product.js';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
