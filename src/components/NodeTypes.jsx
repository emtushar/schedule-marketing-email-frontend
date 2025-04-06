import { Handle } from "@xyflow/react";
import { Mail, Clock, Users } from "lucide-react";

export function SequenceNode({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <Handle type="target" position="top" className="w-3 h-3" />
      <div className="text-center">
        <h3 className="font-normal">{data.label}</h3>
      </div>
      <Handle type="source" position="bottom" className="w-3 h-3" />
    </div>
  );
}

export function LeadSourceNode({ data }) {
  return (
    <>
      {data.list ? (
        <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-semibold">Leads from</h3>
              <p className="text-sm text-gray-600">
                {data?.list?.listName || "Sample List"}
              </p>
            </div>
            <Handle type="source" position="bottom" className="w-3 h-3" />
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
          <div className="flex flex-col items-center font-mono text-gray-600">
            <button onClick={data.onClick}>
              <h4 className=" text-sm">+</h4>
              <h4 className=" text-sm">Add Lead Source</h4>
              <p className=" text-[8px]">Click to add leads from List or CRM</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function EmailNode({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <Handle type="target" position="top" className="w-3 h-3" />
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-purple-500" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-gray-600">
            {data.template || "Template 1"}
          </p>
        </div>
      </div>
      <Handle type="source" position="bottom" className="w-3 h-3" />
    </div>
  );
}

export function WaitNode({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <Handle type="target" position="top" className="w-3 h-3" />
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-500" />
        <div>
          <h3 className="font-semibold">Delay</h3>
          <p className="text-sm text-gray-600">
            Wait {data.duration || "1"} {data.unit || "Days"}
          </p>
        </div>
      </div>
      <Handle type="source" position="bottom" className="w-3 h-3" />
    </div>
  );
}

export function AddNodeButton({ data, isConnectable }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Handle
        type="target"
        position="top"
        isConnectable={isConnectable}
        className="w-3 h-3"
      />
      <button
        onClick={data.onClick}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        +
      </button>
    </div>
  );
}
