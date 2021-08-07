import Header from "./Header";
import Grid from "./Grid";

const HomePage = () => {
    return(
        <div>        
            <Header slideshow="start slideshow" link="/paintings/1"></Header>
            <Grid></Grid>
        </div>
    );
}

export default HomePage;