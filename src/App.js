import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Header from './Header'
import './global.css'


import Routes from "./routes"

function App() {
  return (
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
