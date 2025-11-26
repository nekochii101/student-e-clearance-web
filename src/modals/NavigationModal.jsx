import React from 'react'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from "react-router-dom";

import '../styles/NavigationModal.css';
import DefaultProfile from '../assets/img/profile-default.png';
import Logo from '../assets/img/occ-logo.png'
import BackBTN from "../assets/img/btn-left-arrows.png";
import ActLog from "../assets/img/ico-actlog.png";
import Approved from "../assets/img/ico-approved.png";
import AttachedFile from "../assets/img/ico-attachedfile.png";
import AttachedLink from "../assets/img/ico-attachedlink.png";
import CleaRance from "../assets/img/ico-clearance.png";
import DecLined from "../assets/img/ico-declined.png";
import Edit from "../assets/img/ico-edit.png";
import PenDing from "../assets/img/ico-pending.png";
import TermiNate from "../assets/img/ico-terminate.png";
import TerminateAll from "../assets/img/ico-terminateall.png";
import View from "../assets/img/ico-view.png";

function NavigationModal({ openNavigation, setContent, onClose}) {
  if (!openNavigation) return null;
  const navigate = useNavigate();

  const QueueRequirements = () => {
    setContent("Queue Requirements");
    
  }
  const Requirements = () => {
    setContent("Requirements Manager");
  
  }
  const ActivityLog = () => {
    setContent("Activity Log");
    
  }

  const logout = () => {
    navigate("/");
    onClose()
  }

  return createPortal(
    <div className="nav-container">
      <div className="nav-content">
        <div className="back-container">
          <img src={BackBTN} className='back-btn' onClick={onClose} />
        </div>
        <div className="nav-header-dashboard">
          
          <img src={Logo} className="nav-logo"/>
          <h1 className="nav-title">Admin Dashboard</h1>
        </div>
        <div className="div-cont">
          <hr className='hr-div'/>
                  <h1 className='div-header'>Select Content</h1>
                  <hr className='hr-div'/>
        </div>

        <button onClick={QueueRequirements} className="nav-btn">Queue Requirements</button>
        <button onClick={Requirements} className="nav-btn">Requirements Manager</button>
        <button onClick={ActivityLog} className="nav-btn"><div><img src={Actlog} /></div></button>
        <div>
          
        </div>
        <div className='profile-card'>
          <img src={DefaultProfile} className='pc-profile' />
          <div className='pc-info'>
            <p className='pc-office'>Office Name</p>
            <p className='pc-email'>johndoe@outlook.com</p>
          </div>  
          <button className='pc-btn' onClick={logout}>Log out</button>
      </div>
      </div>
      
    </div>,
    document.body
  );
}

export default NavigationModal;