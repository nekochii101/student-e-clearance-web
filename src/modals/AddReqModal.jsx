import { useState } from 'react';
import { createPortal } from 'react-dom';

import '../styles/AddReqModal.css'

import DefaultProfile from '../assets/img/profile-default.png';

function AddReqModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [selected, setSelected] = useState(["CIT "]);
  const [text, setText] = useState("");
  const max = 380;

  const handleChange = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)   // remove if clicked again
        : [...prev, value]                  // add new selection
      );
  };
  return createPortal(
    <div className='ar-container-overlay'>
      <div className='ar-container'>
        <div className='ar-forms'>
          <h1 className='ar-forms-header'>Add Requirements</h1>
          <form className='ar-form-cluster'>
            <label className='ar-label'>Title<b style={{color: 'red'}}>*  </b>
            <input />
            </label>
            
            <label className='ar-label'>Description <b style={{color: 'red'}}>*</b></label>
            <div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={max}
                placeholder="Type something here..."
                className='ar-textarea'
              />

    <p style={{ color: text.length > max - 20 ? "red" : "#555" }} className='ar-charcounter'>{text.length} / {max}</p>
  </div>
  <div  className='ar-checkbox'>
            <b>Assigned to</b>
              <div className='ar-checkbox-cluster'>
            <label>
            <input 
                type="checkbox" 
                value="CIT "
                checked={selected.includes("CIT ")}
                onChange={() => handleChange("CIT ")}
                
            /> CIT </label>
            <label>
            <input 
                type="checkbox" 
                value="CBA "
                checked={selected.includes("CBA ")}
                onChange={() => handleChange("CBA ")}
            /> CBA </label>
            <label>
            <input 
              type="checkbox" 
              value="CTE "
              checked={selected.includes("CTE ")}
              onChange={() => handleChange("CTE ")}
            /> CTE </label>
            </div>
            
          </div>
            <label className='ar-req-selection'>Requirements Type  
            <select>
              <option value="sanction">Sanction</option>  
              <option value="penalty">Penalty</option>
              <option value="document_request">Document Request</option>
              <option value="google_form">Google Form</option>
          </select>
          
          </label>

          <div className="ar-amount-due">
            <label >
            Amount Due
            <b>₱</b>
            <input type='number' />
          </label>
          </div>
          
          <div className='ar-link'>
              <label >Link
             <input />
          </label>
          </div>
        
        <div className='ar-file'>
          <label>Attach File
            <input type='file'/>
         </label>
        </div>
         <hr style={{width: '100%'}}/>
         <div className='ar-action-btn-a'>
          <button type='reset'>Reset</button>

          <div className='ar-action-btn-b'> 
            <button onClick={onClose} >Add </button>
          <p className='ar-info'>You are about to add requirements to <b>{selected}</b></p>
          
          
          </div>
             
         </div>
          
          </form>
        </div>
        
      
          
     
       
        </div>  
      </div>, document.body
  );
}

export default AddReqModal;