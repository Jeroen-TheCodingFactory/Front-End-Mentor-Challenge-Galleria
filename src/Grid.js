import Painting from "./Painting";

import "./css/Grid.css";

const Grid = (props) => {
    return(
        <ul class="grid">
            <Painting src="./img/starry-night/gallery.jpg" alt="blabla" className="painting starry"></Painting>
            <Painting src="./img/girl-with-pearl-earring/gallery.jpg" className="painting girl"></Painting>
            <Painting src="./img/guernica/gallery.jpg" className="painting guernica"></Painting>
            <Painting src="./img/penitent-magdalene/gallery.jpg" className="painting penitent"></Painting>
            <Painting src="./img/the-storm-on-the-sea-of-galilee/gallery.jpg" className=" painting storm"></Painting>
            <Painting src="./img/the-great-wave-off-kanagawa/gallery.jpg" className="painting wave"></Painting>
            <Painting src="./img/van-gogh-self-portrait/gallery.jpg" className="painting gogh"></Painting>
            <Painting src="./img/the-sleeping-gypsy/gallery.jpg" className="painting sleeping"></Painting>
            <Painting src="./img/lady-with-an-ermine/desktop/gallery.jpg" className="painting lady"></Painting>
            <Painting src="./img/the-night-cafe/gallery.jpg" className="painting cafe"></Painting>
            <Painting src="./img/mona-lisa/gallery.jpg" className="painting mona"></Painting>
            <Painting src="./img/the-basket-of-apples/gallery.jpg" className="painting basket"></Painting>
            <Painting src="./img/the-boy-in-the-red-vest/gallery.jpg" className="painting boy"></Painting>
            <Painting src="./img/arnolfini-portrait/gallery.jpg" className="painting portrait"></Painting>
            <Painting src="./img/the-swing/gallery.jpg" className="painting swing"></Painting>            
        </ul>
    );
}

export default Grid;