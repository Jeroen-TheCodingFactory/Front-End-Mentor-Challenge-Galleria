/* React-Router */
import { Link } from "react-router-dom";
/* CSS */  
import "../css/Header.css";

const Header = ({slideshow, link}) => {
    return ( 
        <header className="header">
            <Link className="header__start_slideshow" to="/">
                <figure className="header__logo">
                    <img src="/img/shared/logo.svg" alt="galleria site logo" />
                </figure>
            </Link>
           <Link className="header__start_slideshow" to={link}>{slideshow}</Link>
        </header>
    );
}

export default Header;