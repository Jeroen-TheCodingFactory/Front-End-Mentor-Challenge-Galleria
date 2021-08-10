/* React (Hooks) */
import { useEffect } from "react";
/* Own Components */
import Header from "../generic/Header";
import Grid from "../homepage/Grid";

const HomePage = () => {
    /* Needed for scrolling to top everytime the Page gets loaded */
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);


    return(
        <div className="a-popup">        
            <Header slideshow="start slideshow" link="/paintings/1"></Header>
            <Grid></Grid>
        </div>
    );
}

export default HomePage;