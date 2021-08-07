import Grid from "./Grid";
import './css/App.css'; 
import DetailPage from "./DetailPage";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route path= "/paintings/:id">
                    <Header slideshow="stop slideshow" link="/"></Header>
                    <DetailPage></DetailPage>
                </Route>
                <Route path = "/" > 
                    <Header slideshow="start slideshow" link="/paintings/1"></Header>
                    <Grid></Grid>
                </Route>
            </Switch>
        </Router>

    );
}
 
export default App;