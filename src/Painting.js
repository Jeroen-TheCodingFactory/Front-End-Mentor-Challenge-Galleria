import { Link } from "react-router-dom";
import CardOverlay from "./CardOverlay";
import "./css/Painting.css";

const Painting = ({src, className, title, author, alt,link}) =>{
    return(
        <li class="painting" className={className}> 
                <figure class="painting__figure">
                    <Link class="painting__link" to={link}>
                        <img class="painting__image" src={src} alt={alt} />
                        <CardOverlay title={title} author={author}> </CardOverlay>
                    </Link>
                </figure>  
      
        </li> 
    ); 
}

export default Painting;