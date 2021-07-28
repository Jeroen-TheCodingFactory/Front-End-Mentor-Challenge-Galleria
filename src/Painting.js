import "./css/Painting.css";
const Painting = ({src, className}) =>{
    return(
        <li class="painting" className={className}> 
            <figure class="painting__figure">
                <img class="painting__image" src={src} alt="" />
            </figure>  
        </li> 
    ); 
}

export default Painting;