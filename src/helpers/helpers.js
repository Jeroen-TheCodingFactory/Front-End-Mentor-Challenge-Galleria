/* Own components */
import Painting from "../homepage/Painting";
/* data which contains all paintings as objects in 1 array */
import {data} from "../data/paintings";
/* Global var for amount of paintins and so the max value of the progress bar shown on Detail Pages */
import {MAXPROGRESSBARVALUE} from "../data/progressbarvalue";


/* function for disabling a vertical overflow on elements */ 
export const disableOverflowY = (tagName) => {
    //document.getElementsByTagName(tagName)[0].style.overflowY = "hidden";
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
                key={painting.id}
                title={painting.title}
                author={painting.author}
                alt={`A painting named ${painting.title} by ${painting.author}`}
                className={`painting ${painting.className}`}
                src={painting.images.gallery}
                link={`/paintings/${painting.id}`}
                description={painting.description}
            />
        );
    });
}

/* function to filter 1 specific painting from the list*/
/* needs int for it to work with === */
export const getSpecificPainting = (idFromUrl) =>{
  return data.filter(painting => {
        return painting.id === idFromUrl;
   });
}

export const getMaxProgressBarValue = () =>{
    return MAXPROGRESSBARVALUE;
}

