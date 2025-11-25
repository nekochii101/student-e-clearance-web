import React from 'react'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from "react-router-dom";

import '../styles/AccountModal.css';
import DefaultProfile from '../assets/img/profile-default.png';

function Modal({ openAccount, onClose}) {
  if (!openAccount) return null;
  const navigate = useNavigate();

    const handleLogout = () => {
    navigate("/");
    onClose
};

  return createPortal(
    <div className="container">
      <div className="content">
        <p onClick={onClose} className='close'>✖️</p>
        <img src={DefaultProfile} className="profile"/>
        <div className="office-container">
          <b className="office">Office Name</b>
        </div>
        <p  className="email">username@example.com</p>
        <button onClick={handleLogout} className="btn">Log out</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;