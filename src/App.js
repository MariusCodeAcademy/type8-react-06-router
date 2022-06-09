import { Route } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <h1>Heloo again world</h1>
      <HomePage />
      <Route path='/about'>
        <AboutPage />
      </Route>
      <ContactPage />
    </div>
  );
}

export default App;
