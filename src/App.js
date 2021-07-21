// import logo from './logo.svg';
import './App.css';
import LiveryLayout from './Layouts/LiveryLayout'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NFpage from "./components/404/NFpage";


function App() {

  return (
      <Router>
          <Switch>
              <div className="app">
                  <Header/>
                  <div className='container-fluid sub-cont'>
                      <div className="container">
                          <div id="top"/>
                          <Route exact path={'/'}>
                              <Redirect to={'/liveries'}/>
                          </Route>
                          <Route path={'/liveries/'}>
                              <LiveryLayout/>
                          </Route>
                          <Route path={['/rules', '/home', '/staff', '/pilots', '/routes', '/home']}>
                              <NFpage/>
                          </Route>
                      </div>
                  </div>
                  <Footer/>
              </div>
          </Switch>

      </Router>
  );
}

export default App;
