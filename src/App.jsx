import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
//spinner
import { CircleLoader } from 'react-spinners';
//redux
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  const { loading } = useSelector((state) => state.authReducer);


  if (loading)
    return (
      <div className='spinner-container'>
        <CircleLoader color="#ff8500" loading={true} size={90} />;
        <h3>Loading ...</h3>
      </div>
    );

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={'Loading ...'}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
