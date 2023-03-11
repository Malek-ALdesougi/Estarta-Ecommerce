import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={'Loading ...'}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
