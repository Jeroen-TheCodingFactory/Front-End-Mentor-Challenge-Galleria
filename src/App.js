import Grid from "./Grid";
import './css/App.css'; 
import DetailPage from "./DetailPage";
import Footer from "./Footer";
const App = () => {
    return ( 
        <div>
            <DetailPage slideshow="stop slideshow"></DetailPage>
            <Footer></Footer>
        </div>
    );
}
 
export default App;