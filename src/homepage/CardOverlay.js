/* CSS files */
import "../css/CardOverlay.css";

const CardOverlay = ({title,author}) => {
    return(
        <section className="cardOverlay">
            <header className="cardOverlay__header">
                <h2 className="cardOverlay__heading">{title || "Default"}</h2>
                <h3 className="cardOverlay__subheading">{author || "Unknown"}</h3>              
            </header>
        </section>
    );
}

export default CardOverlay;