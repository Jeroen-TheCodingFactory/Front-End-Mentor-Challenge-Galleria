import Grid from "./Grid";
import './css/App.css'; 
import DetailPage from "./DetailPage";

const App = () => {
    return ( 
        <div>
            <Grid></Grid>
            <DetailPage slideshow="stop slideshow"></DetailPage>
        </div>
    );
}
 
export default App;