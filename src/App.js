import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import Product from './pages/Product.js';
import ErrorPage from './pages/ErrorPage.js';
import Header from './components/header';

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
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
