import { Mail, Clock } from "lucide-react";

export default function AddNodeModal({ nodes, onClose, onSelectNode }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Node</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onSelectNode("email")}
            className="w-full flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50"
          >
            <Mail className="w-6 h-6 text-purple-500" />
            <div className="text-left">
              <h3 className="font-medium">Cold Email</h3>
              <p className="text-sm text-gray-600">Send an email to leads</p>
            </div>
          </button>
          {nodes.length > 4 ? (
            <button
              onClick={() => onSelectNode("wait")}
              className="w-full flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50"
            >
              <Clock className="w-6 h-6 text-blue-500" />
              <div className="text-left">
                <h3 className="font-medium">Wait/Delay</h3>
                <p className="text-sm text-gray-600">
                  Add a delay between actions
                </p>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
