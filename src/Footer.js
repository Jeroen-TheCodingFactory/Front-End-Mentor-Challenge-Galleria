import "./css/Footer.css";

const Footer = ({progressBarValue, maxProgressBarValue,title,author,previousPainting,nextPainting}) => {
    console.log(nextPainting);
    return (
        <footer className="footer">
            <progress className="footer__progressBar" max={maxProgressBarValue} value={progressBarValue}></progress>
            <div className="footer__wrapper">
                <header className="footer__headers">
                    <h4 className="footer__paintingHeader">{title}</h4>
                    <h5 className="footer__artistHeader">{author}</h5>
                </header>
                <section className="footer__buttons">
                    <a href={previousPainting} className="footer__button">
                        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#000" fill="none" fillRule="evenodd">
                                <path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2"/>
                                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/>
                            </g>
                        </svg>
                    </a>
                    <a href={nextPainting} className="footer__button">
                        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#000" fill="none" fillRule="evenodd">
                                <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2"/>
                                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/>
                            </g>
                        </svg>
                    </a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;