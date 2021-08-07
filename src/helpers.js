import {data} from "./data/paintings";
import Painting from "./Painting";

/* function for disabling a vertical overflow on elements */ 
export const disableOverflowY = (tagName) => {
    document.getElementsByTagName(tagName)[0].style.overflowY = "hidden";
}

/* function for enabling a vertical overflow on elements */
export const enableOverFlowY = (tagName) => {
    document.getElementsByTagName(tagName)[0].style.overflowY = "visible";
}

/*closure for getting all paintings from the datasheet*/
export const getPaintings = () =>{
    return data.map(painting => {
        return(
            <Painting
                title={painting.title}
                author={painting.author}
                alt={`A painting named ${painting.title} by ${painting.author}`}
                className={`painting ${painting.className}`}
                src={painting.src}
                link={`/paintings/${painting.id}`}
            />
        );
    });
}