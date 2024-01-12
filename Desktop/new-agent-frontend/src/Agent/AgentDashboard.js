import React, { useState } from "react";
import AgentList from "./AgentList";
import CreateAgentForm from "./CreateAgentForm";

const AgentDashboard = () => {
  const [showAgentList, setShowAgentList] = useState(false);

  const handleShowAgentList = () => {
    setShowAgentList(true);
  };

  const handleShowCreateAgentForm = () => {
    setShowAgentList(false);
  };

  return (
    <div>
      <h1>Agent Dashboard</h1>
      <button onClick={handleShowAgentList}>Show Agent List</button>
      <button onClick={handleShowCreateAgentForm}>Create Agent</button>

      {showAgentList ? <AgentList /> : <CreateAgentForm />}
    </div>
  );
};

export default AgentDashboard;
