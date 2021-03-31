import './Navbar2.css'
import { Link } from 'react-router-dom'
import {useState } from 'react'
import { useEffect} from 'react'
import {handleClick} from '../../Components/Helpers/Helpers' 
import menu from '../../images/menu.svg'
import logo from '../../images/logo.png'




function Navbar2 (props) {
    // const [click, setClick] = useState(false)
    const {click, setClick} = props
    const handleClick = () => setClick(!click)
    const [scrollNav, setScrollNav] = useState(false)

     const changeNav = () => {
        if(window.scrollY >= 70) {
          setScrollNav(true)
         } else {
             setScrollNav(false)
        }
     }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

    return(
        <nav className="navbar">            
            <div className="nav-container">
                <div  className={scrollNav ? "nav-logo hidden" : "nav-logo "}><img src={logo} alt=""/></div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/login" className="nav-links">Մոasdfasdfւտք</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/statistics" className="nav-links">Վիճակագրություն</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/about" className="nav-links">Մեր մասին</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/" className="nav-links">Գլխավոր</Link></li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
            </div>
        </nav>
    )
}


export default Navbar2


















