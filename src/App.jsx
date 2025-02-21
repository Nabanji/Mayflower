import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Programs from './Pages/Programs/Programs';
import Partner from './Pages/Partner/Partner';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/programs' element={<Programs/>}></Route>
          <Route path='/partner-opportunities' element={<Partner />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

