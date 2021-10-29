import logo from './logo.svg';
import './App.css';
import Navbar from './Compo/Navbar';
import Textform from './Compo/Textform';
import AboutUs from './Compo/About';
import Alert from './Compo/Alert';
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  
  function App() {
    const[alert, setalert]=useState(null)
            const showAlert=(message,type)=>{
                setalert({
                    msg:message,
                    type:type
                })
                setTimeout(() => {
                  setalert(null)
                }, 1500);
            }
          
    return (
      <>
      <Router>
    <Navbar title=" Textutils" li1="Home" li2="About" li3="Contact Us" li4="More"/>
    
    {/* <div className="container" style={mystyle}> */}
    <div className="container">
    {/* <Textform  /> */}
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/">
            <Textform heading="Try TextUtils- Word counter, Charater counter, Removes extra spaces" showAlert={showAlert}/>
          </Route>
          <Route path="/about"></Route>
        </Switch>
    </div>
    </Router>
    </>
  );
    }


export default App;
