import React, { useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import {
  AddNodeButton,
  EmailNode,
  LeadSourceNode,
  SequenceNode,
  WaitNode,
} from "./NodeTypes.jsx";
import AddNodeModal from "./AddNodeModal.jsx";
import EmailModal from "./EmailModal.jsx";
import WaitModal from "./WaitModal.jsx";
import LeadSourceModal from "./LeadSourceModal.jsx";
import { Rocket } from "lucide-react";
import SuccessModal from "./SuccessModal.jsx";

const nodeTypes = {
  sequence: SequenceNode,
  addButton: AddNodeButton,
  email: EmailNode,
  wait: WaitNode,
  leadSource: LeadSourceNode,
};

const initialNodes = [
  {
    id: "leadSource",
    type: "leadSource",
    position: {
      x: 0,
      y: -140,
    },
    data: { onClick: () => {} },
  },
  {
    id: "sequence",
    type: "sequence",
    position: { x: 0, y: 0 },
    data: { label: "Sequence Start Point" },
  },
  {
    id: "addButton",
    type: "addButton",
    position: { x: 40, y: 100 },
    data: { onClick: () => {} },
  },
];

const initialEdges = [
  {
    id: "edge-1",
    source: "sequence",
    target: "addButton",
  },
];

const createEdge = (sourceId, targetId) => ({
  id: `${sourceId}-${targetId}`,
  source: sourceId,
  target: targetId,
  type: "smoothstep",
});

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useNodesState(initialEdges);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showWaitModal, setShowWaitModal] = useState(false);
  const [lastNodeId, setLastNodeId] = useState("sequence");
  const [showLeadSourceModal, setShowLeadSourceModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useState(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "addButton") {
          return {
            ...node,
            data: { ...node.data, onClick: () => setShowAddModal(true) },
          };
        } else if (node.id === "leadSource") {
          return {
            ...node,
            data: { ...node.data, onClick: () => setShowLeadSourceModal(true) },
          };
        } else {
          return node;
        }
      })
    );
  }, []);

  const handleSelectNode = (type) => {
    setShowAddModal(false);
    if (type === "email") {
      setShowEmailModal(true);
    } else if (type === "wait") {
      setShowWaitModal(true);
    }
  };

  const updateNodesAndEdges = (newNode) => {
    // Remove existing edge to add button if it exists
    const filteredEdges = edges.filter((edge) => edge.target !== "addButton");
    // Add edge from last node to new node
    const edgeToNewNode = createEdge(lastNodeId, newNode.id);

    // Add edge from new node to add button
    const edgeToAddButton = createEdge(newNode.id, "addButton");

    setEdges([...filteredEdges, edgeToNewNode, edgeToAddButton]);
    setLastNodeId(newNode.id);
  };

  const handleSaveEmail = (template) => {
    const newNode = {
      id: `email-${Date.now()}`,
      type: "email",
      position: { x: 50, y: nodes[nodes.length - 1].position.y },
      data: { template: template.templateName },
    };

    const newButtonPosition = {
      x: 100,
      y: nodes[nodes.length - 1].position.y + 150,
    };

    setNodes((nds) => [
      ...nds.filter((n) => n.id !== "addButton"),
      newNode,
      {
        id: "addButton",
        type: "addButton",
        position: newButtonPosition,
        data: { onClick: () => setShowAddModal(true) },
      },
    ]);
    updateNodesAndEdges(newNode);
    setShowEmailModal(false);
  };

  const handleSaveWait = (duration, unit) => {
    const newNode = {
      id: `wait-${Date.now()}`,
      type: "wait",
      position: { x: 50, y: nodes[nodes.length - 1].position.y },
      data: { duration, unit },
    };

    const newButtonPosition = {
      x: 100,
      y: nodes[nodes.length - 1].position.y + 150,
    };

    setNodes((nds) => [
      ...nds.filter((n) => n.id !== "addButton"),
      newNode,
      {
        id: "addButton",
        type: "addButton",
        position: newButtonPosition,
        data: { onClick: () => setShowAddModal(true) },
      },
    ]);
    updateNodesAndEdges(newNode);
    setShowWaitModal(false);
  };

  const handleSaveLeadSource = (list) => {
    const newNode = {
      id: `leadSource-${Date.now()}`,
      type: "leadSource",
      position: {
        x: nodes.find((node) => node.id === "leadSource").position.x,
        y: -140,
      },
      data: { list: list },
    };
    const newLeadPosition = {
      x: nodes.find((node) => node.id === "leadSource").position.x + 250,
      y: -140,
    };

    setNodes((nds) => [
      newNode,
      {
        id: "leadSource",
        type: "leadSource",
        position: newLeadPosition,
        data: { onClick: () => setShowLeadSourceModal(true) },
      },
      ...nds.filter((n) => n.id !== "leadSource"),
    ]);
    console.log(newNode);
    // add edge to sequence from new lead
    const edgeToSequence = createEdge(newNode.id, "sequence");

    setEdges([edgeToSequence, ...edges]);
    setShowLeadSourceModal(false);
  };

  const handleSaveFlow = () => {
    // send email body,subj,email address,time
    // show a dialog that show sent
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className=" flex justify-between items-center h-[11vh]  p-4 ">
        <div className="text-xl font-sans ml-6">Job Posting :</div>
        <button
          className="flex gap-2 bg-blue-500 text-white p-3 px-5 rounded-md mr-43 "
          onClick={handleSaveFlow}
        >
          <Rocket />
          Save & Schedule
        </button>
      </div>
      <div className=" w-[100vw] h-[81vh] border-1  border-gray-200">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>

        {showLeadSourceModal && (
          <LeadSourceModal
            onClose={() => setShowLeadSourceModal(false)}
            onSave={handleSaveLeadSource}
          />
        )}
        {showAddModal && (
          <AddNodeModal
            nodes={nodes}
            onClose={() => setShowAddModal(false)}
            onSelectNode={handleSelectNode}
          />
        )}

        {showEmailModal && (
          <EmailModal
            onClose={() => setShowEmailModal(false)}
            onSave={handleSaveEmail}
          />
        )}

        {showWaitModal && (
          <WaitModal
            onSave={handleSaveWait}
            onClose={() => setShowWaitModal(false)}
          />
        )}

        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </div>
    </>
  );
}

export default FlowChart;
