import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = ({slideshow, link}) => {
    return (
        <header class="header">
           <figure className="header__logo">
               <img src="/img/shared/logo.svg" alt="galleria site logo" />
           </figure>
           <Link class="header__start_slideshow" to={link}>{slideshow}</Link>
        </header>
    );
}

export default Header;