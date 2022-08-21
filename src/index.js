import React from 'react';
import { ContextProvider } from './Context/Context';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Login from './pages/Login';
import Home from './pages/Home'
import Contact from './pages/Contact'
import PrivateRoutes from './utils/PrivateRoutes'
import LoginRoute from './utils/LoginRoute';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ContextProvider>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
        <Route element={<LoginRoute/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </ContextProvider>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
