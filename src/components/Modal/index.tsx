import React from 'react';
import './styles.css';

const Modal = ({active, setActive}) => {
    return (
        <div class={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div class="modal_container" onClick={e => e.stopPropagation()}>
                <div class="modal_body">
                    <div class="modal_header">
                        Hello
                    </div>
                    <div class="modal_close">
                        <a href="">&times;</a>
                    </div>
                    <div class="modal_content">

                    </div>
                </div>
            </div>

        </div>
    ) 
}

export default Modal;


