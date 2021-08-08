import "./css/DetailPlane.css";

const DetailPlane = ({title,author,year,description,images,openOrCloseModal}) => {
    return (
        <main className="detailPlane">
            <figure className="detailPlane__figure">
                <picture> 
                    <source media="(min-width: 62.5rem)" srcSet={images.large}  />
                    <img src={images.small} alt="placeholder alt" className="detailPlane__image" />
                </picture>
                <button className="detailPlane__button" onClick={openOrCloseModal}>
                    <svg className="detailPlane__buttonLogo" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
                    <section className="detailPlane__buttonText">
                        View Image
                    </section>
                </button>
            </figure>
            <section className="detailPlane__figcaption">
                <h1 className="detailPlane__heading">{title}</h1>
                <h3 className="detailPlane__subheading">{author}</h3>
            </section>
            <figure className="detailPlane__artist">
                <img src={images.artist} alt={author}/>
            </figure>
            <header className="detailPlane__year">
                <h2 className="detailPlane__yearHeading">{year}</h2>
            </header>
            <section className="detailPlane__about">
                <p className="detailPlane__text"> 
                    {description}
                </p>
                <a href="#" className="detailPlane__link">Go to source</a>
            </section>
        </main>
    );
}

export default DetailPlane;