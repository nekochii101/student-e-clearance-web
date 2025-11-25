import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <>
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  ); 
}

export default App;
