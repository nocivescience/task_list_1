import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./componentes/Home";
import {Navbar} from './componentes/Navbar';
import {TaskList} from './componentes/TaskList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tasks' element={<TaskList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
