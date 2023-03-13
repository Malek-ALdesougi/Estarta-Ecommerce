import { lazy, Suspense, useEffect } from 'react';

//router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components 
import NavBar from './components/NavBar/NavBar';

//redux
import { useSelector, useDispatch } from 'react-redux';

// auth checker component
import Auth from './components/Auth';

//spinnger 
import Spinner from './components/Spinner/Spinner';

//function
import { checkAuthToken } from './redux/authReducer/actions';


const Home = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));

function App() {

  const { isAuth, loading} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthToken(isAuth));
    console.log('check done');
    <Navigate to={'/login'}/>
  },[isAuth])

  console.log(loading);

  if (loading) return <Spinner />;


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Suspense fallback={<Spinner />}>
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
