// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose,cake2 }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src= {cake2} alt="Смородина миничиз"  width="242" height="242" />
        <h2>Смородина миничиз</h2>
        <p class="description">Состав: ванилин, яйцо, желатин, мука миндальная, крахмал кукурузный, масло сливочное, смородина, итальянская мука твердых сортов, сливки натуральные, сыр творожный натуральный, сахарозаменитель Prebio (инулин, сукралоза, эритрит), лимон  </p>
        <p class="price">Цена: 1150 Т</p>
      </div>
    </div>
  );
};

export default Modal;
