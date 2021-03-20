import './Header.css'
import { Link } from 'react-router-dom'
import erit from '../../erit.png'
 
function Header () {
    return(
        <div className="Header-container">
            <div className="Logo">
                <Link to="/">
                    <span >
                        <div className="erithayer">
                            <img src={erit} alt=""/>
                        </div>
                    </span> 
                </Link>
            </div>            
        </div>
    )
}

export default Header

















