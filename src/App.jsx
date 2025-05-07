import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Programs from './Pages/Programs/Programs';
import Partner from './Pages/Partner/Partner';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Sports from './Pages/SportsProgram/Sports';
import Education from './Pages/EducationProgram/Education';
import TasteofHope from './Pages/TasteofHope/Tasteofhope';
import Empower from './Pages/EmpowerHerProgram/Empower';


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
          <Route path='/programs/sports-program' element={<Sports />}></Route>
          <Route path='/programs/taste-of-hope-program' element={<TasteofHope />}></Route>
          <Route path='/programs/education-program' element={<Education />}></Route>
          <Route path='/programs/empower-her-program' element={<Empower />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

