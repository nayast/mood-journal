import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Diary from '../src/pages/Diary'
import Mood from '../src/pages/Mood'
import Stats from '../src/pages/Stats'
import Meow from '../src/pages/Meow'
import MainLayout from './components/MainLayout/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/diary" element={<Diary/>}/>
          <Route path="/mood" element={<Mood/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/meow" element={<Meow/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

