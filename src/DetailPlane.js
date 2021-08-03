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
        </main>
    );
}

export default DetailPlane;