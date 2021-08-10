/* Helper functions */
import { disableOverflowY } from "../helpers/helpers";
/* CSS */
import "../css/Modal.css";
import "../css/Animations.css";

const Modal = ({isOpen = false, openOrCloseModal, image,alt}) =>{

    let rendered = "";
    if(isOpen === true){
        disableOverflowY("body");
        rendered = (
            <article className="modal" onClick={() => openOrCloseModal()}>
                <figure className="modal__figure">
                    <img src={image} alt="dit is een test?" className="modal__image a-show-modal" />
                    <button onClick={() => openOrCloseModal()} className="modal__button">
                    close
                    </button>
                </figure>
            </article>
        );
    }
    return rendered;
}

export default Modal;