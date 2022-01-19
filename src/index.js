import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import App from './App';

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Store>,
  document.getElementById('root')
);
