import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar} from './pages/navbar';
import {Home} from './pages/home'
import {Blog} from './pages/blog'
import {Youtube} from './pages/youtube'
import {About} from './pages/about'
import {Default} from './pages/default'
function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/youtube">
          <Youtube/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="*">
          <Default/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
