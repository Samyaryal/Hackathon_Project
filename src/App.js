import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Activities from './components/Activity/Activities';
import Events from './components/Event/Event';
import Place from './components/Place/Place';
import Home from './components/Home/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/activities' component={Activities} />
          <Route path='/events' component={Events} />
          <Route path='/places' component={Place} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
