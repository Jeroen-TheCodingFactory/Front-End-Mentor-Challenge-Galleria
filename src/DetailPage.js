import "./css/DetailPage.css";
import Header from "./Header";
import DetailPlane from "./DetailPlane";

const DetailPage = ({slideshow}) => {
    return (
        <div>
            <Header slideshow={slideshow}></Header>
            <DetailPlane></DetailPlane>
        </div>
    );
}

export default DetailPage;