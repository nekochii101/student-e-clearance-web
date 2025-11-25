import React, {useState} from 'react'
import '../../styles/RequirementsMan.css'

import DefaultProfile from "../../assets/img/profile-default.png"
import DataSorting from "../../utils/DataSorting"
import AddReqModal from "../../modals/AddReqModal"
import EditReqModal from '../../modals/EditReqModal'


const dept = [
  "College of Information Technology",
  "College of Business Administration",
  "College of Teacher Education",
];

function List({name, openModal})  {
      
  return(
    <div className="m-contlist-container">
      <div className="m-const-infogroup">
      <img src={DefaultProfile} alt="profile" className="m-contlist-profile"/>
      <h2 className="m-contlist-fname">{name}</h2>
      </div>
      <div>

      <button className="m-contlist-btn-edit" onClick={openModal}>Edit</button>
      <button className="m-contlist-btn-terminate">Terminate</button>
                    {/* <b className='m-conlist-dept'>BSIT </b> */}

      </div>
    </div>
  )
}

function RequirementsManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  return (
    <div className="m-cont-container">
      <div className="query-list-container">

        <div className="sorting-container">
          <DataSorting />
        </div>
        <div className="m-cont-scroll-view">
        {dept.map((name, index) => (
          <List key={index} 
          name={name} 
           openModal={() => {
                              setSelectedName(name);
                              setIsOpen2(true);
                          }} 
        />))}
        </div>
        <div className='rm-btn-group'>
          <button className="rm-btn-add-req" onClick={() => setIsOpen(true)}>Add Requirements</button>
          <button className='rm-btn-add-terminate-all'>Terminate All</button>
        </div>
      </div>
      <AddReqModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        <EditReqModal isOpen2={isOpen2} onClose={() => setIsOpen2(false)}/>
    </div>
  )
}

export default RequirementsManager;