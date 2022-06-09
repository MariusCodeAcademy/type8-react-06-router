import { Route } from 'react-router-dom';

import './App.css';
import MainNav from './components/MainNav';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      {/* <HomePage /> */}
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
    </div>
  );
}

export default App;
