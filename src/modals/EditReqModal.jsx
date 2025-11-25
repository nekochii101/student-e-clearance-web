import { useState } from 'react';
import { createPortal } from 'react-dom';

import '../styles/AddReqModal.css'

function EditReqModal({ isOpen2, onClose }) {
  if (!isOpen2) return null;
  const [selected, setSelected] = useState([]);
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
          <h1 className='ar-forms-header'>Edit Requirements</h1>
          <form className='ar-form-cluster'>
            <label className='ar-label'>Title <b style={{color: 'red'}}>*</b></label>
            <input />
            <label className='ar-label'>Description <b style={{color: 'red'}}>*</b></label>
            <div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={max}
                placeholder="Type something here..."
                className='ar-textarea'
              />

    <p style={{ color: text.length > max - 20 ? "red" : "#555" }}>{text.length} / {max}</p>
  </div>
            <label className='ar-label'>Requirements Type</label>
            <select>
              <option></option>
              <option value="sanction">Sanction</option>
              <option value="penalty">Penalty</option>
              <option value="document_request">Document Request</option>
              <option value="google_form">Google Form</option>
          </select>
          <div>
            <label className='ar-label'>Assigned to</label>
            <label className='ar-label'>
            <input 
                type="checkbox" 
                value="Option 1"
                checked={selected.includes("Option 1")}
                onChange={() => handleChange("Option 1")}
            /> CIT </label>
            <label className='ar-label'>
            <input 
                type="checkbox" 
                value="Option 2"
                checked={selected.includes("Option 2")}
                onChange={() => handleChange("Option 2")}
            /> CBA </label>
            <label className='ar-label'>
            <input 
              type="checkbox" 
              value="Option 3"
              checked={selected.includes("Option 3")}
              onChange={() => handleChange("Option 3")}
            /> CTE </label>
          </div>
          <label className='ar-label'>Link</label>
          <input />
          </form>

          <div>
            <label className='ar-label'>Attached Files</label> <br/>
            <button>Delete</button>
            <button>View</button> 
            <b className='ar-label'>untitled document.docx</b>
          </div>
        </div>
        <button onClick={onClose}>Save Changes</button>
       
        </div>  
      </div>, document.body
  );
}

export default EditReqModal;