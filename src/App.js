import React from 'react';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/Work":
      component = <Work/>
      break
    case "/About":
      component = <About/>
      break
  }
  return (
  <> 
    <Navbar />
    <div className='container'> {component}</div>
  </>
  ) 

}

export default App;