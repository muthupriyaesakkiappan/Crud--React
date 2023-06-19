import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Create} from './components/create/create';
import {Edit} from './components/Edit/Edit';
import View from './components/singlruser/singleuser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
        <Route path='/View/:id' element={<View/>}/>

      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
