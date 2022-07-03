import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Todo from './routes/Todo';
import Progress from './routes/Progress';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <>
    <MainNavbar/>


    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/progress" element={<Progress/>}/>
    </Routes>
    </>
  );
}

export default App;
