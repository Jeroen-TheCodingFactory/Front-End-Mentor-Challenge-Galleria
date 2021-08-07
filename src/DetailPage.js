import "./css/DetailPage.css";
import Header from "./Header";
import DetailPlane from "./DetailPlane";
import Footer from "./Footer";

const DetailPage = ({slideshow}) => {
    return (
        <div>
            <Header slideshow={slideshow}></Header>
            <DetailPlane></DetailPlane>
            <Footer />
        </div>
    );
}

export default DetailPage;