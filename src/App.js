/* React-Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Own components */
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
/* CSS files */
import './css/App.css'; 

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route path= "/paintings/:id">
                    <DetailPage></DetailPage>
                </Route>
                <Route path = "/" > 
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </Router>

    );
}
 
export default App;