import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
//spinner
import { CircleLoader } from 'react-spinners';
//redux
import { useSelector } from 'react-redux';
// auth checker component
import Auth from './components/Auth';

const Home = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  const { loading } = useSelector((state) => state.authReducer);

  if (loading)
    return (
      <div className="spinner-container">
        <CircleLoader color="#ff8500" loading={true} size={90} />;
        <h3>Loading ...</h3>
      </div>
    );

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Suspense fallback={'Loading ...'}>
            <Routes>
              <Route path="/" element={<Auth><Home /></Auth>} />
              <Route path="login" element={<LoginPage />} />
              <Route path="cart" element={<Auth><Cart /></Auth>} />
              <Route path="products" element={<Auth><Products /></Auth>} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
