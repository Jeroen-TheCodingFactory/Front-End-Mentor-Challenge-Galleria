import CardOverlay from "./CardOverlay";
import "./css/Painting.css";
const Painting = ({src, className, title, author}) =>{
    return(
        <li class="painting" className={className}> 
            <figure class="painting__figure">
                <img class="painting__image" src={src} alt="" />
                <CardOverlay title={title} author={author}> </CardOverlay>
            </figure>  
        </li> 
    ); 
}

export default Painting;