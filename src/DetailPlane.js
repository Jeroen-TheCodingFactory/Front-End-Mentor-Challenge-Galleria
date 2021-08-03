import "./css/DetailPlane.css";

const DetailPlane = (props) => {
    return (
        <main class="detailPlane">
            <figure className="detailPlane__figure">
                <img src="./img/starry-night/hero-large.jpg" alt="placeholder alt" className="detailPlane__image" />
            </figure>
            <section class="detailPlane__figcaption">
                <h1 class="detailPlane__heading">Starry Night</h1>
                <h2 class="detailPlane__subheading">Vincent van Gogh</h2>
            </section>
            <figure className="detailPlane__artist">
                <img src="./img/starry-night/artist.jpg" alt="placeholder"/>
            </figure>
            <section className="detailPlane__about">
                <p className="detailPlane__text"> 
                    Although The Starry Night was painted during the day in Van Gogh's ground-floor 
                    studio, it would be inaccurate to state that the picture was painted from memory. 
                    The view has been identified as the one from his bedroom window, facing east, a 
                    view which Van Gogh painted variations of no fewer than twenty-one times, including 
                    The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, 
                    around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the 
                    morning, I watch the sun rise in all its glory."
                </p>
            </section>
        </main>
    );
}

export default DetailPlane;