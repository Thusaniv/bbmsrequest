import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './project/login';
import Request from './project/request';
import Layout from './layout';
import Notfound from './Notfound';
import Requestform from './project/requestform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Request />} /> {/* Default route after login */}
          <Route path="*" element={<Notfound />} />
          <Route path="/Requestform" element={<Requestform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
