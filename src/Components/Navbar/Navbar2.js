import './Navbar2.css'
import { Link } from 'react-router-dom'
import {useState } from 'react'
import { useEffect} from 'react'
// import {handleClick} from '../../Components/Helpers/Helpers' 
// import menu from '../../images/menu.svg'
import logo from '../../images/logo.png'



function Navbar2 (props) {
    // const [click, setClick] = useState(false)
    const {click, setClick} = props
    const handleClick = () => setClick(!click)
    const [scrollNav, setScrollNav] = useState(false)
    const closeMenu = () => {
        setClick(false)

    }
     const changeNav = () => {
        if(window.scrollY >= 200) {
          setScrollNav(true)
         } else {
             setScrollNav(false)
        }
     }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const ScrollToTop = () => {
      window.scrollTo(0, 0);
     
  }
    return(
        <nav className="navbar">            
            <div className="nav-container">
                <div onClick={() => ScrollToTop()} className={scrollNav ? "nav-logo hidden" : "nav-logo "}><img src={logo} alt=""/></div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" >
                        <Link  
                            onClick={() => closeMenu()} 
                            to="/" 
                            activeClassName="active" 
                            className="nav-links"><span>Գլխավոր</span> 
                        </Link></li>              
                    <li className="nav-item " >
                        <Link 
                            onClick={() => closeMenu()} 
                            to="/about" 
                            activeClass="active" 
                            className="nav-links erithay"><span>երիտհայեր</span> 
                        </Link></li>
                    <li className="nav-item" >
                        <Link 
                            onClick={() => closeMenu()} 
                            to="/statistics" 
                            activeClass="active" 
                            className="nav-links"><span>Վիճակագրություն</span>
                        </Link></li>
                    <li className="nav-item" >
                        <Link 
                            onClick={() => closeMenu()} 
                            to="/about" 
                            activeClass="active" 
                            className="nav-links"><span>Մեր մասին</span>
                        </Link></li>
                    {/* <li className="nav-item active" ><Link onClick={() => closeMenu()} to="/login" className="nav-links login">Մուտք</Link></li> */}
                    <li className="nav-item" >
                        <Link 
                            onClick={() => closeMenu()} 
                            to="/login" 
                            className="nav-links button">
                                <button 
                                    className="login-button" 
                                    onClick={() => closeMenu()}>
                                        Մուտք
                                </button>
                        </Link></li>                    
                </ul>
                <div className="nav-icon" onClick={() => handleClick()}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
            </div>
        </nav>
    )
}


export default Navbar2


















