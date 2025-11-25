import { useState } from 'react';
import { createPortal } from 'react-dom';

import '../styles/ViewReqModal.css'

import DefaultProfile from '../assets/img/profile-default.png';
import CancelBTn from '../assets/img/btn-cancel.png';

function ViewReqModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className='vq-container-overlay'>
      <div className='vq-container'>
        <button onClick={onClose} className="vq-cancel-btn" >      
        <img src={CancelBTn} />
          </button>
        <div className='vq-profile-card'>
          <img src={DefaultProfile} className='vq-profile-pic' />
          <div className='vq-txtcluster'>
          <p className='vq-fname'>Koelen G. Neutdonse</p>
          <p className='vq-course'>Batchelor of Science in Information Technology</p>
          </div>
        </div>

        <div className="view-content">
          


        </div>

        <div className="vq-btn-cluster">
          <div>
            <button className="vq-btn">Approved</button>
            <button className="vq-btn">Declined</button>
          </div>
          <div>
          <button className="vq-btn-save">Save</button>
          </div>
        </div>
        
      </div>
    </div>,
    document.body
  );
}

export default ViewReqModal;