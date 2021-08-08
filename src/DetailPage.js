import  {useState} from "react";
import Header from "./Header";
import DetailPlane from "./DetailPlane";
import Modal from "./Modal";
import Footer from "./Footer";
import { enableOverFlowY, getSpecificPainting } from "./helpers";
import "./css/DetailPage.css";
import { useParams } from "react-router-dom";


const DetailPage = () => {
    let [isOpen,setIsOpen] = useState(false);
    let {id} = useParams();
    
    const openOrCloseModal = () =>{
        enableOverFlowY("body");
        return setIsOpen(!isOpen);
    }

    let detailPlane = getSpecificPainting(parseInt(id)).map(painting => {
        return(
            <DetailPlane 
                description={painting.description} 
                title={painting.title}
                author={painting.author}
                year={painting.year}
                openOrCloseModal={openOrCloseModal}
                images={painting.images}
            />
        );
    }); 

    let modal = getSpecificPainting(parseInt(id)).map(painting => {
        return(
            <Modal
                openOrCloseModal={openOrCloseModal} 
                isOpen={isOpen}
                image={painting.images.gallery}
                alt={`A painting named ${painting.title} by ${painting.author}`}
            />
        );
    });
    
    
    return (
        <div class="detailPage">
            <Header slideshow="stop slideshow" link="/"></Header>
            {detailPlane}
            {modal}
            <Footer></Footer>
        </div>
    );
}

export default DetailPage;