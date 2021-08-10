/* React-Router */
import { Link } from "react-router-dom";
/* CSS */  
import "../css/Header.css";

const Header = ({slideshow, link}) => {
    return ( 
        <header className="header">
            <Link class="header__link"to="/">
                <figure className="header__logo">
                    <img src="/img/shared/logo.svg" alt="galleria site logo" />
                </figure>
            </Link>
            <section className="header__slideshow">
                <Link className="header__start_slideshow" to={link}>{slideshow}</Link>
            </section>
        </header>
    );
}

export default Header;