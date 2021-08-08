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
    let detailPlane = getSpecificPainting(parseInt(id)).map(detailPlane => {
        return(
            <DetailPlane 
                description={detailPlane.description} 
                title={detailPlane.title}
                author={detailPlane.author}
                year={detailPlane.year}
                openOrCloseModal={openOrCloseModal}
                images={detailPlane.images}>
            </DetailPlane>
        );
    }); 
    
    return (
        <div class="detailPage">
            <Header slideshow="stop slideshow" link="/"></Header>
            {detailPlane}
            <Modal openOrCloseModal={openOrCloseModal} isOpen={isOpen}></Modal>
            <Footer></Footer>
        </div>
    );
}

export default DetailPage;