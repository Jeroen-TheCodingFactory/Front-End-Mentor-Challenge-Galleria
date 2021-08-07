import DetailPage from "./DetailPage";
import HomePage from "./HomePage";
import './css/App.css'; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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