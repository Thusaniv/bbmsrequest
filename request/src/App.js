import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './project/login';
import Request from './project/request';
import Layout from './layout';
import Notfound from './Notfound';
import Requestform from './project/requestform';
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './routes/privateRoute'
import PublicRoute from './routes/publicRoute'
function App() {
  return (
    <AuthProvider>
    
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        </Route>

        {/* Routes with Layout */}
        <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Request />} /> {/* Default route after login */}
          <Route path="*" element={<Notfound />} />
          <Route path="/Requestform" element={<Requestform />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
