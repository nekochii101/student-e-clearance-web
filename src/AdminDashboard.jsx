import React, {useState} from 'react'


import Logo from "./assets/img/occ-logo.png";
import CITLogo from './assets/img/logo-cit.png';
import CBALogo from './assets/img/cba-logo.png';
import CTELogo from './assets/img/cte-logo.png';

import MenuBTN from './assets/img/menu.png'
import ProfileDefault from "./assets/img/profile-default.png";
import AccountModal from './modals/AccountModal';
import NavigationModal from './modals/NavigationModal';
import DefaultContent from './components/admin_contents/DefaultContent';
import QueueRequirements from './components/admin_contents/QueueRequirements';
import RequirementsMan from './components/admin_contents/RequirementsMan';
import ActivityLog from './components/admin_contents/ActivityLog'

function AdminDashboard() {
    const [openAccount, setOpenAccount] = useState(false);
    const [openNavigation, setOpenNavigation] = useState(false);
    const [content, setContent] = useState("Admin Dashboard | No Selected Content");

    const renderContent = () => {
        if (content === "Queue Requirements") return <QueueRequirements />;
        if (content === "Requirements Manager") return <RequirementsMan />;
        if (content === "Activity Log") return <ActivityLog />;
        else {return <DefaultContent />}
    }
    
  return (

     
    <div className="scroll-container">
    <div className="ad-container-a">
        <AccountModal openAccount={openAccount} onClose={() => setOpenAccount(false)} />
        <NavigationModal openNavigation={openNavigation} onClose={() => setOpenNavigation(false)} setContent={setContent}/>
       

        <div className="ad-content-b">
        <div className="ad-header-b">
            <img src={MenuBTN} className="ad-menu-btn" onClick={() => setOpenNavigation(true)}/>
            <p className="ad-title-b">{content}</p>
    </div>
    </div>

    <div className="ad-dashboard-container">
        {renderContent()}
    </div>

    </div>
     
    </div>
  )
}

export default AdminDashboard;