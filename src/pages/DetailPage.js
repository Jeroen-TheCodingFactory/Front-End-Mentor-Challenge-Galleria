/* React (hooks) */
import  { useState, useEffect } from "react";
/* React-Router */
import { useParams } from "react-router-dom";
/* Own Components */
import Header from "../generic/Header";
import DetailPlane from "../detailpage/DetailPlane";
import Modal from "../detailpage/Modal";
import Footer from "../detailpage/Footer";
/* Helper functions */
import {getMaxProgressBarValue, getSpecificPainting } from "../helpers/helpers";
/* CSS */
import "../css/DetailPage.css";
import "../css/Animations.css";


const DetailPage = () => {
    /* Needed for scrolling to top everytime the Page gets loaded */
       useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    let [isOpen,setIsOpen] = useState(false);
    let {id} = useParams();
    
    const openOrCloseModal = () =>{
        return setIsOpen(!isOpen);
    }

    /* get 1 painting from url parameter (helper function) and generate all the components from it*/
    /* In the Footer another helper function is used to get the max value of the progress bars (amount of paintings) */
    let toBeRendered = getSpecificPainting(parseInt(id)).map(painting => {
        return(
            <div key={painting.id} className="detailPage">
                <Header slideshow="stop slideshow" link="/"></Header>
                <DetailPlane 
                    description={painting.description} 
                    title={painting.title}
                    author={painting.author}
                    year={painting.year}
                    openOrCloseModal={openOrCloseModal}
                    images={painting.images}
                    alt={`A painting named ${painting.title} by ${painting.author}`}
                    link={painting.links.source}
                />
                <Modal
                    openOrCloseModal={openOrCloseModal} 
                    isOpen={isOpen}
                    image={painting.images.gallery}
                    alt={`A painting named ${painting.title} by ${painting.author}`}
                />
                <Footer
                    progressBarValue={painting.progressBarValue}
                    maxProgressBarValue={getMaxProgressBarValue()}
                    title={painting.title}
                    author={painting.author}
                    previousPainting={painting.links.previousPainting}
                    nextPainting={painting.links.nextPainting}
                />
            </div>
        );
    });
    
    
    return (
        <div className="a-popup">{toBeRendered}</div>
    );
}

export default DetailPage;