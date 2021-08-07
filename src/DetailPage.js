import  {useState} from "react";
import Header from "./Header";
import DetailPlane from "./DetailPlane";
import Modal from "./Modal";
import Footer from "./Footer";
import { enableOverFlowY } from "./helpers";
import "./css/DetailPage.css";


const DetailPage = () => {
    let [isOpen,setIsOpen] = useState(false);

    const openOrCloseModal = () =>{
        enableOverFlowY("body");
        return setIsOpen(!isOpen);
    }
    
    return (
        <div class="detailPage">
            <Header slideshow="stop slideshow" link="/"></Header>
            <DetailPlane openOrCloseModal={openOrCloseModal}></DetailPlane>
            <Modal openOrCloseModal={openOrCloseModal} isOpen={isOpen}></Modal>
            <Footer></Footer>
        </div>
    );
}

export default DetailPage;