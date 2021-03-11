import './Navbar.css'
import { FiSearch } from 'react-icons/fi'

function  Navbar () {
    return(
        <div className="Navbar-container">
            <div className="Search">
                {/* <span>Որոնում</span> */}
               <input type="text"/>
                <div className="Icon"><FiSearch /></div>
            </div>
            {/* <div className="Nav-links">
                <a href="#">Մուտք</a>
                <a href="#">Գրանցվել</a>
            </div> */}
        </div>
    )
}

export default Navbar









