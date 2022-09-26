import React from 'react';
import { AuthContextProvider } from './Context/AuthContext';
import { QrCodeContextProvider } from './Context/QrCodeContext';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Login from './pages/Login';
import Home from './pages/Home'
import PrivateRoutes from './utils/PrivateRoutes'
import LoginRoute from './utils/LoginRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthContextProvider>
      <QrCodeContextProvider>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
        <Route element={<LoginRoute/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
      </Routes>
      </QrCodeContextProvider>
    </AuthContextProvider>
    <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
