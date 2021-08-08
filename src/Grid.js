/* Helper functions */
import { getPaintings } from "./helpers";
/* CSS */
import "./css/Grid.css";

const Grid = () =>{
    /* get all paintings from Helper function */
    const paintings = getPaintings();
    return(
        <ul className="grid">
            {paintings}
        </ul>
    );
}

export default Grid;