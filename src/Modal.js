import "./css/Modal.css";

const Modal = (props) =>{
    return (
        <article className="modal">
            <figure className="modal__figure">
                <img src="./img/starry-night/gallery.jpg" alt="" className="modal__image" />
                <button className="modal__button" autofocus="true">
                    close
                </button>
            </figure>
        </article>
    )
}

export default Modal;