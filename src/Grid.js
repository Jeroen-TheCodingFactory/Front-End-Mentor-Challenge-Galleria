import Painting from "./Painting";
import {data} from "./data/paintings";
import "./css/Grid.css";

const Grid = () =>{
    data.map( painting => console.log(painting));
    return(
        <ul class="grid">
            <Painting src="/img/starry-night/gallery.jpg" alt="blabla" className="painting starry" title="Starry Night" author="Vincent van Gogh"></Painting>
            <Painting src="/img/girl-with-pearl-earring/gallery.jpg" className="painting girl" title="Girl with a Pearl Earring" author="Johannes Vermeer"></Painting>
            <Painting src="/img/guernica/gallery.jpg" className="painting guernica" title="Guernica" author="Pablo Picasso"></Painting>
            <Painting src="/img/penitent-magdalene/gallery.jpg" className="painting penitent" title="Penitent Magdalene" author="Artemisia Gentileschi"></Painting>
            <Painting src="/img/the-storm-on-the-sea-of-galilee/gallery.jpg" className=" painting storm" title="The storm on the Sea of Galilee" author="Rembrandt"></Painting>
            <Painting src="/img/the-great-wave-off-kanagawa/gallery.jpg" className="painting wave" title="The Great Wave off Kanagawa" author="Hokusai"></Painting>
            <Painting src="/img/van-gogh-self-portrait/gallery.jpg" className="painting gogh" title="Van Gogh self-portrait" author="Vincent van Gogh"></Painting>
            <Painting src="/img/the-sleeping-gypsy/gallery.jpg" className="painting sleeping" title="The Sleeping Gypsy" author="Henri Rousseau"></Painting>
            <Painting src="/img/lady-with-an-ermine/desktop/gallery.jpg" className="painting lady" title="Lady with an Ermin" author="Leonardo da Vinci"></Painting>
            <Painting src="/img/the-night-cafe/gallery.jpg" className="painting cafe" title="The Night Café" author="Vincent van Gogh"></Painting>
            <Painting src="/img/the-basket-of-apples/gallery.jpg" className="painting basket" title="The Basket of Apples" author="Paul Cezanne"></Painting>
            <Painting src="/img/the-boy-in-the-red-vest/gallery.jpg" className="painting boy" title="The Boy in the Red Vest" author="Edward Hopper"></Painting>
            <Painting src="/img/arnolfini-portrait/gallery.jpg" className="painting portrait" title="Arnolfini Portrait" author="Jan van Eyck"></Painting>
            <Painting src="/img/mona-lisa/gallery.jpg" className="painting mona" title="Mona Lisa" author="Leonardo da Vinci"></Painting>
            <Painting src="/img/the-swing/gallery.jpg" className="painting swing" title="The Swing" author="Jean-Honore Fragonard"></Painting>            
        </ul>
    );
}

export default Grid;