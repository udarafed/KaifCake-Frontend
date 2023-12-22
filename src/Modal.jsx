import React from 'react';
import './Modal.css';
import './App.js';


  const Modal = ({isOpen, onClose, product}) => {
      return (
          <>
            { product && (
                <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    <span className="close" onClick={onClose}>&times;</span>
                    <img src={product.image} alt={product.alt} width="242" height="242" />
                    <h2>{product.name}</h2>
                    <p className="description">  {product.compound}</p>
                    <p className="price">{product.price.toLocaleString('ru-RU')} ₸</p>
                  </div>
                </div>
            )}
          </>
      );
};  

export default Modal;
