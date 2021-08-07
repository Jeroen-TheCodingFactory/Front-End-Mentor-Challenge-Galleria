import Grid from "./Grid";
import './css/App.css'; 
import DetailPage from "./DetailPage";
import Footer from "./Footer";
const App = () => {
    return ( 
        <div>
            <Grid/>
            <DetailPage slideshow="stop slideshow"/>
        </div>
    );
}
 
export default App;