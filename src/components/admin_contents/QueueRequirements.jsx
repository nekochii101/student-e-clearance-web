import React, {useState} from 'react'
import '../../styles/QueueRequirements.css'

import DefaultProfile from "../../assets/img/profile-default.png"
import DataSorting from "../../utils/DataSorting"
import ViewReqModal from '../../modals/ViewReqModal';


const fullName = [
  "Nikolai Volkov",
  "Svetlana Petrova",
  "Dmitri Sokolov",
  "Anya Morozova",
  "Kirill Makarov",
  "Mark Anthony Dela Cruz",
  "Jasmine Reyes",
  "Rafael Santos",
  "Althea Mae Villanueva",
  "John Carlo Mendoza",
  "Logan Parker",
  "Avery Thompson",
  "Ethan Mitchell",
  "Chloe Robertson",
  "Mason Clarke",
  "Haruto Tanaka",
  "Aoi Nakamura",
  "Ren Suzuki",
  "Yuna Fujimoto",
  "Sora Takahashi",
  "Alexei Barinov",
  "Keisha Ann Magbanua",
  "Connor Fitzgerald",
  "Mei Sasahara",
  "Hailey Morgan"
];




function List({name , openModal})  {

  return(
    <div className="m-contlist-container">
      <div className="m-const-infogroup">
      <img src={DefaultProfile} alt="profile" className="m-contlist-profile"/>
      <h2 className="m-contlist-fname">{name}</h2>
      </div>
      <div>

      <button className="m-contlist-btn-view" onClick={openModal}>View</button>
      <button className="m-contlist-btn-pending">Pending</button>
                    {/* <b className='m-conlist-dept'>BSIT </b> */}

      </div>
    </div>
  )
}

function QueueRequirements() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState(null);

  return (
    <div className="m-cont-container">
      <div className="query-list-container">

        <div className="sorting-container">
          <DataSorting />
        </div>
        <div className="m-cont-scroll-view">
        {fullName.map((name, index) => (
          <List key={index} 
                name={name} 
                openModal={() => {
                              setSelectedName(name);
                              setIsOpen(true);
                          }} 
          />))}
        </div>
      </div>
      <ViewReqModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      </ViewReqModal>
    </div>
  )
}

export default QueueRequirements;