import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Portfolio, Resume, Skills } from './containers'
import './App.css';
import { Navbar } from './components';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* particles components */}
        <Navbar />
        {/* main page content components */}
        <Routes>
          {/* create all routers */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
