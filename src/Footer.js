import "./css/Footer.css";

const Footer = props => {
    return (
        <footer className="footer">
            <header className="footer__headers">
                <h4 class="footer__paintingHeader">Starry Night</h4>
                <h5 class="footer__artistHeader">Vincent van Gogh</h5>
            </header>
            <section className="footer__buttons">
                <button className="footer__button">
                    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#000" fill="none" fill-rule="evenodd">
                            <path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/>
                            <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/>
                        </g>
                    </svg>
                </button>
                <button className="footer__button footer__button--disabled">
                    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#000" fill="none" fill-rule="evenodd">
                            <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/>
                            <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/>
                        </g>
                    </svg>
                </button>
            </section>
        </footer>
    );
}

export default Footer;