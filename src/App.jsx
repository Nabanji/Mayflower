import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Programs from './Pages/Programs/Programs';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/programs' element={<Programs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

