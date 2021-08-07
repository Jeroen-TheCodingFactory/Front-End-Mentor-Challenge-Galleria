import { Link } from "react-router-dom";
import CardOverlay from "./CardOverlay";
import "./css/Painting.css";

const Painting = ({src, className, title, author, alt,link}) =>{
    console.log(link); 
    return(
        <li class="painting" className={className}> 
            <Link className="painting__link" to={link}>
                <figure class="painting__figure">
                    <img class="painting__image" src={src} alt={alt} />
                    <CardOverlay title={title} author={author}> </CardOverlay>
                </figure>  
            </Link>
        </li> 
    ); 
}

export default Painting;