import { getPaintings } from "./helpers";
import "./css/Grid.css";

const Grid = () =>{
    /* get all paintings from Helper function */
    const paintings = getPaintings();
    return(
        <ul class="grid">
            {paintings}
        </ul>
    );
}

export default Grid;