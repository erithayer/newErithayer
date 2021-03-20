import './Navbar2.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
 
function Navbar2 () {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return(
        <nav className="navbar">
            <div className="nav-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/login" className="nav-links">Մուտք</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/login" className="nav-links">Վիճակագրություն</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/login" className="nav-links">Մեր մասին</Link></li>
                    <li className="nav-item" activeClassName="active"><Link onClick={handleClick} to="/login" className="nav-links">Գլխավոր</Link></li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    )
}


export default Navbar2


















