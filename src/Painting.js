/* React Router */
import { Link } from "react-router-dom";
/* Own Components */
import CardOverlay from "./CardOverlay";
/* CSS */
import "./css/Painting.css";

const Painting = ({src, className, title, author, alt,link}) =>{
    return(
        <li className="painting" className={className}> 
                <figure className="painting__figure">
                    <Link className="painting__link" to={link}>
                        <img className="painting__image" src={src} alt={alt} />
                        <CardOverlay title={title} author={author}> </CardOverlay>
                    </Link>
                </figure>  
        </li> 
    ); 
}

export default Painting;