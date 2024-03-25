import { Provider } from 'react-redux';
import './assets/style/App.sass'
import Participants from './components/Participants';
import {  BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import NotFound from './components/NotFound';
// import store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to={'/about'}>Информация о забеге</Link>
          <Link to={'/participants'}>Участники</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to={'/about'} />} />
        <Route path='/about' element={<About />} />
        <Route path='/participants' element={<Participants />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
