import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<App/>}>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

  <RecoilRoot>
    <Main/>
  </RecoilRoot>

);


