import React from 'react'
import Home from './Views/Home'
import Cafe from './Views/Cafe'
import Restaurant from './Views/Restaurant'
import Activity from './Views/Activity'
import Admin from './Views/Admin'
import Edit from './Views/Edit'
import Header from './Components/Header'
import Footer from './Components/Footer'


import{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"


function App() {
  return (
    <div className="relative pb-5 min-h-screen">

      <Router>

        <Header />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/cafe">
              <Cafe />
            </Route>
            <Route path="/restaurant">
              <Restaurant />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path='/:id'>
                <Edit/>
            </Route>
          </Switch>


        <Footer />

      </Router>
    </div>
  );
}

export default App;
