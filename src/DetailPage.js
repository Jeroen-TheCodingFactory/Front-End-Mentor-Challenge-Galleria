import "./css/DetailPage.css";
import Header from "./Header";
const DetailPage = ({slideshow}) => {
    return (
        <div>
            <Header slideshow={slideshow}></Header>
        </div>
    );
}

export default DetailPage;