import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './component/AbouUs';
import ContactUs from './component/ContactUs';
import Auth from './component/Auth';
// import SignUp from './component/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/SignUp';
import Landing from './component/Landing';
import Website from './component/Website';
import Heading from './component/Heading';
import Home from './component/Home';
import Website2 from './component/Website2';
import Website3 from './component/Website3';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<Auth><AboutUs /></Auth>} />
        <Route path='/contact' element={<Auth><ContactUs /></Auth>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/website' element={<Website />} />
        <Route path='/website2' element={<Website2 />} />
        <Route path='/website3' element={<Website3 />} />




      </Routes>

    </BrowserRouter >
    //<Home />
  );
}


export default App;