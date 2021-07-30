import "./css/CardOverlay.css";
import HeadingOne from "./HeadingOne";
const CardOverlay = ({title}) => {
    return(
        <section className="cardOverlay">
            <HeadingOne title={title}></HeadingOne>
        </section>
    );
}

export default CardOverlay;