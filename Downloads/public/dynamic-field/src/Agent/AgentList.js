// import React from "react";

// const AgentList = () => {
//   // Fetch and display list of agents
//   return (
//     <div>
//       <h2>Agent List</h2>
//       {/* Display the list of agents here */}
//     </div>
//   );
// };

// export default AgentList;

import React from "react";

const AgentList = () => {
  // Dummy agent data
  const dummyAgents = [
    { id: 1, name: "Agent 1", role: "Support", location: "City A" },
    { id: 2, name: "Agent 2", role: "Sales", location: "City B" },
    { id: 3, name: "Agent 3", role: "Technical Support", location: "City C" },
    // Add more dummy agents as needed
  ];

  return (
    <div>
      <h2>Agent List</h2>
      <ul>
        {dummyAgents.map((agent) => (
          <li key={agent.id}>
            <strong>{agent.name}</strong> - {agent.role}, {agent.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
