// import React, { useState } from "react";

// const Dashboard = () => {
//   const [showAgentSection, setShowAgentSection] = useState(false);

//   const showTotalPages = () => {
//     // Add logic to fetch and display total pages information
//     setShowAgentSection(false);
//   };

//   //   const showAgentSection = () => {
//   //     // Add logic to fetch and display agent-related content
//   //     setShowAgentSection(true);
//   //   };

//   return (
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           width: "150px",
//           height: "900px",
//           backgroundColor: "#333",
//           color: "#fff",
//           padding: "20px",
//         }}
//       >
//         <h2>Dashboard</h2>
//         <ul>
//           <li>
//             <a
//               href="#"
//               onClick={showTotalPages}
//               style={{
//                 color: "#fff",
//               }}
//             >
//               Total Pages
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               onClick={showAgentSection}
//               style={{
//                 color: "#fff",
//               }}
//             >
//               Agents
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h1>Welcome to the Dashboard!</h1>
//         {showAgentSection && (
//           <div>
//             <h2>Agent Section</h2>
//             {/* Add Agent-related content here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [showAgentSection, setShowAgentSection] = useState(false);

//   const showTotalPages = () => {
//     // Add logic to fetch and display total pages information
//     setShowAgentSection(false);
//   };

//   //   const showAgentSection = () => {
//   //     // Add logic to fetch and display agent-related content
//   //     setShowAgentSection(true);
//   //   };

//   return (
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           width: "150px",

//           backgroundColor: "#333",
//           color: "#fff",
//           padding: "20px",
//         }}
//       >
//         <h2>Dashboard</h2>
//         <ul>
//           <li>
//             <Link
//               to="/total-pages"
//               onClick={showTotalPages}
//               style={{
//                 color: "#fff",
//                 textDecoration: "none",
//               }}
//             >
//               Total Pages
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/agents"
//               onClick={showAgentSection}
//               style={{
//                 color: "#fff",
//                 textDecoration: "none",
//               }}
//             >
//               Agents
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h1>Welcome to the Dashboard!</h1>
//         {showAgentSection && (
//           <div>
//             <h2>Agent Section</h2>
//             {/* Add Agent-related content here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
// import AgentDashboard from "../Agent/AgentDashboard";
import Main from "../module/example1/Main";
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "150px",
          height: "900px",
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link
              to="/total-pages"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Total Pages
            </Link>
          </li>
          <li>
            <Link
              to="/agents"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {/* <Main /> */}
              {/* <AgentDashboard /> */}
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 3, padding: "200px" }}>
        <h1>Welcome to the Dashboard!</h1>

        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
