import "./css/DetailPage.css";
import Header from "./Header";
import DetailPlane from "./DetailPlane";
import Footer from "./Footer";
import Modal from "./Modal";

const DetailPage = ({slideshow}) => {
    return (
        <div class="detailPage">
            <Header slideshow={slideshow}></Header>
            <DetailPlane></DetailPlane>
            <Footer></Footer>
            <Modal></Modal>
        </div>
    );
}

export default DetailPage;