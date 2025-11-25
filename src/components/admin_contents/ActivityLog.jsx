import React, { useState } from "react";
import "../../styles/RequirementsMan.css";
import "../../styles/History.css";

// Sample data
const activityLogs = [
  { id: 1, studentName: "Aira Mendoza", action: "Submitted requirement", requirement: "Library Clearance", timestamp: "2025-11-22 09:14 AM" },
  { id: 2, studentName: "Kenji Sato", action: "Updated requirement", requirement: "Registrar Signature", timestamp: "2025-11-22 09:34 AM" },
  { id: 3, studentName: "Liam Carter", action: "Approved by department", requirement: "Dean Clearance", timestamp: "2025-11-22 10:02 AM" },
  { id: 4, studentName: "Maria Dimaano", action: "Rejected requirement", requirement: "Accounting Balance Check", timestamp: "2025-11-22 10:45 AM" },
  { id: 5, studentName: "Yuki Nakamura", action: "Submitted requirement", requirement: "Guidance Interview", timestamp: "2025-11-22 11:10 AM" },
  { id: 6, studentName: "Noah Tremblay", action: "Approved by department", requirement: "Clinic Medical Records", timestamp: "2025-11-22 01:28 PM" },
  { id: 7, studentName: "Bea Francisco", action: "Submitted requirement", requirement: "Departmental Clearance", timestamp: "2025-11-22 02:01 PM" },

  { id: 8, studentName: "Hiroshi Tanaka", action: "Updated requirement", requirement: "Library Clearance", timestamp: "2025-11-22 02:25 PM" },
  { id: 9, studentName: "Samantha Cruz", action: "Submitted requirement", requirement: "Registrar Signature", timestamp: "2025-11-22 02:40 PM" },
  { id: 10, studentName: "Ethan Reyes", action: "Rejected requirement", requirement: "Dean Clearance", timestamp: "2025-11-22 03:05 PM" },
  { id: 11, studentName: "Mika Hashimoto", action: "Approved by department", requirement: "Guidance Interview", timestamp: "2025-11-22 03:22 PM" },
  { id: 12, studentName: "Gabriel Santos", action: "Updated requirement", requirement: "Clinic Medical Records", timestamp: "2025-11-22 03:51 PM" },
  { id: 13, studentName: "Alden Wright", action: "Submitted requirement", requirement: "Accounting Balance Check", timestamp: "2025-11-22 04:10 PM" },
  { id: 14, studentName: "Kyra Velasquez", action: "Approved by department", requirement: "Departmental Clearance", timestamp: "2025-11-22 04:38 PM" },

  { id: 15, studentName: "Jin Park", action: "Rejected requirement", requirement: "Registrar Signature", timestamp: "2025-11-22 05:02 PM" },
  { id: 16, studentName: "Olivia Chen", action: "Submitted requirement", requirement: "Library Clearance", timestamp: "2025-11-22 05:18 PM" },
  { id: 17, studentName: "Marcus Lopez", action: "Updated requirement", requirement: "Clinic Medical Records", timestamp: "2025-11-22 05:33 PM" },
  { id: 18, studentName: "Sarah Mitchell", action: "Approved by department", requirement: "Guidance Interview", timestamp: "2025-11-22 06:01 PM" },
  { id: 19, studentName: "Daniel Cruz", action: "Submitted requirement", requirement: "Dean Clearance", timestamp: "2025-11-22 06:29 PM" },
  { id: 20, studentName: "Rina Matsumoto", action: "Updated requirement", requirement: "Accounting Balance Check", timestamp: "2025-11-22 06:50 PM" },

  { id: 21, studentName: "Leo Fernandez", action: "Submitted requirement", requirement: "Departmental Clearance", timestamp: "2025-11-22 07:05 PM" },
  { id: 22, studentName: "Haruto Ishikawa", action: "Approved by department", requirement: "Registrar Signature", timestamp: "2025-11-22 07:19 PM" },
  { id: 23, studentName: "Aubrey Vega", action: "Rejected requirement", requirement: "Library Clearance", timestamp: "2025-11-22 07:44 PM" },
  { id: 24, studentName: "Dominic Hayes", action: "Updated requirement", requirement: "Dean Clearance", timestamp: "2025-11-22 08:10 PM" },
  { id: 25, studentName: "Chloe Navarro", action: "Submitted requirement", requirement: "Clinic Medical Records", timestamp: "2025-11-22 08:30 PM" }
];


function ActivityLog() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 9 ;

  // Filtered data
  const filteredLogs = activityLogs.filter(
    log =>
      log.studentName.toLowerCase().includes(search.toLowerCase()) ||
      log.requirement.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLast = currentPage * logsPerPage;
  const indexOfFirst = indexOfLast - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  return (
    <div className="h-cont-container">
      <input
        type="text"
        placeholder="Search by student, requirement, action..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Action</th>
            <th>Requirement</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {currentLogs.length > 0 ? (
            currentLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.studentName}</td>
                <td>{log.action}</td>
                <td>{log.requirement}</td>
                <td>{log.timestamp}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                No logs found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ActivityLog;
