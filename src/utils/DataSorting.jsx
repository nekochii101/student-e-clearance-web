import React, { useState } from 'react';
import '../styles/DataSorting.css';

// INSERTED
const ClearStatusButton = ({ onClear }) => (
  <button className="m-cont-btn-close" onClick={onClear}>x</button>
);

// INSERTED
const ClearDepartmentButton = ({ onClear }) => (
  <button className="m-cont-btn-close-fixed" onClick={onClear}>x</button>
);

const ShowYear = () => {
  const [activeYear, setActiveYear] = useState(null);

  const years = ["1st year", "2nd year", "3rd year", "4th year"];

  return (
    <>
      {years.map((year) => (
        <button
          key={year}
          className={`m-cont-btn-fixed-y ${activeYear === year ? "active" : ""}`}
          onClick={() => setActiveYear(year)}
        >
          {year}
        </button>
      ))}
    </>
  );
};

const SelectedCIT = () => <ShowYear />;

const SelectedCBA = ({ selectedCBAMajor, setSelectedCBAMajor }) => (
  <>
    <button className={`m-cont-btn-fixed-m ${selectedCBAMajor === "FM" ? "active" : ""}`}
            onClick={() => setSelectedCBAMajor("FM")}>FM</button>
    <button className={`m-cont-btn-fixed-m ${selectedCBAMajor === "MM" ? "active" : ""}`}
            onClick={() => setSelectedCBAMajor("MM")}>MM</button>
    {["FM", "MM"].includes(selectedCBAMajor) && <ShowYear />}
  </>
);

const SelectedCTE = ({ selectedCTEMajor, setSelectedCTEMajor }) => (
  <>
    <button className={`m-cont-btn-fixed-m ${selectedCTEMajor === "BEED" ? "active" : ""}`}
            onClick={() => setSelectedCTEMajor("BEED")}>BEED</button>
    <button className={`m-cont-btn-fixed-m ${selectedCTEMajor === "BSED" ? "active" : ""}`}
            onClick={() => setSelectedCTEMajor("BSED")}>BSED</button>
    {["BEED", "BSED"].includes(selectedCTEMajor) && <ShowYear />}
  </>
);  

function DataSorting() {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCTEMajor, setSelectedCTEMajor] = useState(null);
  const [selectedCBAMajor, setSelectedCBAMajor] = useState(null);

  const resetStatus = () => setSelectedStatus("All");

  const clearDepartment = () => {
    setSelectedCourse(null);
    setSelectedCTEMajor(null);
    setSelectedCBAMajor(null);
  };

  return (
    <div className="data-sorting-container">
      <div className="sorting-container">
        <div>
          <h2 className="sort-header">Filter by</h2>
        </div>
        <div className="btn-group">

          {/* INSERTED */}
         {selectedStatus !== "All"  && <ClearStatusButton onClear={resetStatus} />}


          {(!selectedStatus || selectedStatus === "All") && (
            <button className={`m-cont-btn ${selectedStatus === "All" ? "active" : ""}`}
                    onClick={() => setSelectedStatus("All")}>
              All
            </button>
          )}
          {(selectedStatus === "Pending" || selectedStatus === "All") && (
            <button className={`m-cont-btn ${selectedStatus === "Pending" ? "active" : ""}`}
                    onClick={() => setSelectedStatus("Pending")}>
              Pending
            </button>
          )}
          {(selectedStatus === "Approved" || selectedStatus === "All") && (
            <button className={`m-cont-btn ${selectedStatus === "Approved" ? "active" : ""}`}
                    onClick={() => setSelectedStatus("Approved")}>
              Approved
            </button>
          )}
          {(selectedStatus === "Declined" || selectedStatus === "All") && (
            <button className={`m-cont-btn ${selectedStatus === "Declined" ? "active" : ""}`}
                    onClick={() => setSelectedStatus("Declined")}>
              Declined
            </button>
          )}
        </div>
      </div>
      
      <div style={{backgroundColor: "#ffeeffb3", width: 4, height: 28, marginRight: 13, marginTop: 4}}></div>

      <div className="department-sorting-container">

        {/* INSERTED */}
        {selectedCourse && <ClearDepartmentButton onClear={clearDepartment} />}

        <div className="btn-group">
          {(!selectedCourse || selectedCourse === "CIT") && (
            <button className={`m-cont-btn-c ${selectedCourse === "CIT" ? "active" : ""}`}
                    onClick={() => setSelectedCourse("CIT")}>CIT</button>
          )}
          {(!selectedCourse || selectedCourse === "CBA") && (
            <button className={`m-cont-btn-c ${selectedCourse === "CBA" ? "active" : ""}`}
                    onClick={() => setSelectedCourse("CBA")}>CBA</button>
          )}
          {(!selectedCourse || selectedCourse === "CTE") && (
            <button className={`m-cont-btn-c ${selectedCourse === "CTE" ? "active" : ""}`} 
                    onClick={() => setSelectedCourse("CTE")}>CTE</button>
          )}
        </div>

        {selectedCourse === "CIT" && <SelectedCIT />}
        {selectedCourse === "CBA" && (
          <SelectedCBA
            selectedCBAMajor={selectedCBAMajor}
            setSelectedCBAMajor={setSelectedCBAMajor}
          />
        )}
        {selectedCourse === "CTE" && (
          <SelectedCTE
            selectedCTEMajor={selectedCTEMajor}
            setSelectedCTEMajor={setSelectedCTEMajor}
          />
        )}
      </div>
    </div>
  );
}

export default DataSorting;
