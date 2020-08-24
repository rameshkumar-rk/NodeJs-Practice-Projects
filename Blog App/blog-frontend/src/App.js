import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Article from './Pages/Article';
import ArticleList from './Pages/ArticleList';
import NavBar from './Navbar'
import NotFound from './Pages/NotFound';
function App() {
  return (
   <Router>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/article/:name" component={Article}/>
      <Route path="/articlelist" component={ArticleList}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
    </div>

    </Router>
  );
}

export default App;
