import './App.css';
import Header from './Components/Header/Header'
// import Navbar from './Components/Navbar/Navbar';
import Main from './Components2/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Components2/Details'
import Login from './Components/Login'
import Navbar2 from './Components/Navbar/Navbar2'
import ScrollToTop from './Components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
     <Header />
     <Navbar2 />
     <Switch>
       <Route path="/" component={Main} exact/>
       <Route path="/details/:name" component={Details}/>
       <Route path="/login" component={Login}/>

     </Switch>
     
    </Router>
  );
}

export default App;
