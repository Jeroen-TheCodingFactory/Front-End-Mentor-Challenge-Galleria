import Painting from "./Painting";
import {data} from "./data/paintings";
import "./css/Grid.css";

const Grid = () =>{
    const paintings = data.map(painting => {
        return(
            <Painting
                title={painting.title}
                author={painting.author}
                alt={`A painting named ${painting.title} by ${painting.author}`}
                className={`painting ${painting.className}`}
                src={painting.src}
            />
        );
    });

    return(
        <ul class="grid">
            {paintings}
        </ul>
    );
}

export default Grid;