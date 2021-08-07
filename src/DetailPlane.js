import "./css/DetailPlane.css";

const DetailPlane = (props) => {
    return (
        <main class="detailPlane">
            <figure className="detailPlane__figure">
                <picture>
                    <source media="(min-width: 62.5rem)" srcset="/img/starry-night/hero-large.jpg" />
                    <img src="/img/starry-night/hero-small.jpg" alt="placeholder alt" className="detailPlane__image" />
                </picture>
                <button className="detailPlane__button" onClick={props.openOrCloseModal}>
                    <svg class="detailPlane__buttonLogo" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
                    <section class="detailPlane__buttonText">
                        View Image
                    </section>
                </button>
            </figure>
            <section class="detailPlane__figcaption">
                <h1 class="detailPlane__heading">Starry Night</h1>
                <h3 class="detailPlane__subheading">Vincent van Gogh</h3>
            </section>
            <figure className="detailPlane__artist">
                <img src="/img/starry-night/artist.jpg" alt="placeholder"/>
            </figure>
            <header className="detailPlane__year">
                <h2 className="detailPlane__yearHeading">1889</h2>
            </header>
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
                <a href="#" className="detailPlane__link">Go to source</a>
            </section>
        </main>
    );
}

export default DetailPlane;