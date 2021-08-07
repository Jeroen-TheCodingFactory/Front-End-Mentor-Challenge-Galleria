import "./css/DetailPage.css";
import Header from "./Header";
import DetailPlane from "./DetailPlane";
import Footer from "./Footer";
import Modal from "./Modal";

import  {useState} from "react";
import { enableOverFlowY } from "./helpers";

const DetailPage = () => {
    let [isOpen,setIsOpen] = useState(false);

    const openOrCloseModal = () =>{
        enableOverFlowY("body");
        return setIsOpen(!isOpen);
    }
    
    return (
        <div class="detailPage">
            <DetailPlane openOrCloseModal={openOrCloseModal}></DetailPlane>
            <Footer></Footer>
            <Modal openOrCloseModal={openOrCloseModal} isOpen={isOpen}></Modal>
        </div>
    );
}

export default DetailPage;