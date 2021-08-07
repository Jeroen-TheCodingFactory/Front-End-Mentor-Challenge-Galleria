import "./css/Modal.css";
import { disableOverflowY } from "./helpers";
const Modal = ({isOpen = false, openOrCloseModal}) =>{

    let rendered = "";
    if(isOpen === true){
        disableOverflowY("body");
        rendered = (
            <article className="modal">
                <figure className="modal__figure">
                    <img src="/img/starry-night/gallery.jpg" alt="" className="modal__image" />
                    <button onClick={() => openOrCloseModal()} className="modal__button" autofocus="true">
                    close
                    </button>
                </figure>
            </article>
        );
    }
    return rendered;
}

export default Modal;