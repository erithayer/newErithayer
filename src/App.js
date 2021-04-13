import './App.css';
// import Header from './Components/Header/Header'
// import Navbar from './Components/Navbar/Navbar';
import Main from './Components2/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Components2/Details'
import Login from './Components/Login/Login'
import Navbar2 from './Components/Navbar/Navbar2'
import ScrollToTop from './Components/ScrollToTop';
import Statistics from './Components/Statistics/Statistics';
import About from './Components/About/About';
// import Navbar from './Components/Navbar/Navbar'
import {useState, memo} from 'react'
import Redirect from './Components/RedirectPage/Redirect'
import Header2 from './Components/Header/Header2'
// import Loading from './Components/Loading';
import Erithayer from './Components/Erithayer/Erithayer'
import Fetch from './Components/Junk/Fetch'

function App() {
    const [click, setClick] = useState(false) 
  return (
    <Router>
      <ScrollToTop />
     <Header2 click={click} setClick = {setClick}/>
     <Navbar2 click={click} setClick = {setClick}/>
     <Fetch />
     {/* <Loading /> */}
     <Switch>
        <Route path="/" exact={true} component={(props) => <Main {...props} click ={click} />} />
        <Route path="/details/:name" component={(props) => <Details {...props} click ={click} />}/>
        <Route path="/login" component={Login}/>
        <Route path="/statistics" component={Statistics} />
        <Route path="/about" component={About} />
        <Route path="/erithayer" component={Erithayer} />
        {/* <Route path='/privacy-policy' component={() => { 
            window.location.href = 'https://example.com/1234'; 
     return null;
}}/> */}
        <Route path="/privacy-policy" component={Redirect} />
     </Switch>
     
    </Router>
  );
}

export default memo(App);
