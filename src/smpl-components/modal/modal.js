import React from 'react';

const Modal = ({ title = 'Default', url = '', onChange = () => { } }) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                <div className="modal-header-title">
                {title}
                </div>
                <div className="modal-header-icon">
                <img/>
                </div>
                </div>
                <div className="moda-container">
                    {/* <video width="400" height="300"  src="https://youtube.com/watch?v=yBLdQ1a4-JI" controls="controls" poster="video/duel.jpg"/> */}
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/Ct6BUPvE2sM" frameborder="0" allow="autoplay; encrypted-media" />
                </div>
            </div>
        </div>
    )
};

export default Modal;