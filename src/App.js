import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Littecanvas from './components/Littecanvas'
// import { LiterallyCanvasReactComponent } from "literallycanvas";
import './App.css'

const App = () => {
  // const canvasInit = lc => {
  //   console.log(lc);
  // };
  return (
    <Router>
      <Navigation />
      {/* <LiterallyCanvasReactComponent
        onInit={canvasInit}
        imageURLPrefix="https://cdn.jsdelivr.net/npm/literallycanvas@0.5.2/lib/img/"
      /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/about' component={About} />
        <Route path='/littecanvas' component={Littecanvas} />
      </Switch>
    </Router>
  )
}

export default App;
