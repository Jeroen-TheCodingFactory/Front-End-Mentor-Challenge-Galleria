import Painting from "./Painting";

import "./css/Grid.css";

const Grid = (props) => {
    return(
        <ul class="grid">
            <Painting src="./img/starry-night/gallery.jpg" alt="blabla" className="starry"></Painting>
            <Painting src="./img/girl-with-pearl-earring/gallery.jpg" className="girl"></Painting>
            <Painting src="./img/guernica/gallery.jpg" className="guernica"></Painting>
            <Painting src="./img/penitent-magdalene/gallery.jpg" className="penitent"></Painting>
            <Painting src="./img/the-storm-on-the-sea-of-galilee/gallery.jpg" className="storm"></Painting>
            <Painting src="./img/the-great-wave-off-kanagawa/gallery.jpg" className="wave"></Painting>
            <Painting src="./img/van-gogh-self-portrait/gallery.jpg" className="gogh"></Painting>
            <Painting src="./img/the-sleeping-gypsy/gallery.jpg" className="sleeping"></Painting>
            <Painting src="./img/lady-with-an-ermine/desktop/gallery.jpg" className="lady"></Painting>
            <Painting src="./img/the-night-cafe/gallery.jpg" className="cafe"></Painting>
            <Painting src="./img/mona-lisa/gallery.jpg" className="mona"></Painting>
            <Painting src="./img/the-basket-of-apples/gallery.jpg" className="basket"></Painting>
            <Painting src="./img/the-boy-in-the-red-vest/gallery.jpg" className="boy"></Painting>
            <Painting src="./img/arnolfini-portrait/gallery.jpg" className="portrait"></Painting>
            <Painting src="./img/the-swing/gallery.jpg" className="swing"></Painting>            
        </ul>
    );
}

export default Grid;