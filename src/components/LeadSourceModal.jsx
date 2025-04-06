import React, { useState } from "react";

function LeadSourceModal({ onClose, onSave }) {
  const [lists, setLists] = useState([
    {
      id: "1",
      listName: "List 1",
    },
    {
      id: "2",
      listName: "List 2",
    },
    {
      id: "3",
      listName: "List 3",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const list = e.target.list.value;
    if (list) {
      const selectedList = lists.find((li) => li.listName == list);
      onSave(selectedList);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Lead Source</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Lists
            </label>
            <select
              name="list"
              className="w-full p-2 border rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select a List
              </option>
              {lists.map((list) => (
                <option key={list.id} value={list.listName}>
                  {list.listName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              New List +
            </button>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeadSourceModal;
