import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';
// import {Home, About, Work} from './pages'


// function App() {
//   let component
//   switch (window.location.pathname) {
//     case "/":
//       component = <Home/>
//       break
//     case "/Work":
//       component = <Work/>
//       break
//     case "/About":
//       component = <About/>
//       break
//   }
//   return (
//   <> 
//     <Navbar />
//     <div className='container'> {component}</div>
//   </>
//   ) 

// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/react-website-2/" element={<Home />} />
          <Route path="/react-website-2/Work" element={<Work />} />
          <Route path="/react-website-2/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
