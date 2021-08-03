import "./css/Header.css";

const Header = ({slideshow}) => {
    return (
        <header class="header">
           <figure className="header__logo">
               <img src="./img/shared/logo.svg" alt="galleria site logo" />
           </figure>
           <a class="header__start_slideshow" href="#">{slideshow}</a> 
        </header>
    );
}

export default Header;