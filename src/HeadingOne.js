import "./css/HeadingOne.css";
const HeadingOne = ({title}) =>{
    return (
        <header className="headingOne">
            <h2 class="headingOne__heading">{title || "Default"}</h2>
        </header>
    );
}

export default HeadingOne;