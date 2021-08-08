import { useEffect} from "react";
import Header from "./Header";
import Grid from "./Grid";

const HomePage = () => {
    /* Needed for scrolling to top everytime the Page gets loaded */
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);


    return(
        <div>        
            <Header slideshow="start slideshow" link="/paintings/1"></Header>
            <Grid></Grid>
        </div>
    );
}

export default HomePage;