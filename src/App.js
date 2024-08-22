import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import Product from './pages/Product.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage message={"Page not found"} statusCode={"404"} />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
