import { useState } from "react";
import AddTemplateModal from "./AddTemplateModal.jsx";

export default function EmailModal({ onClose, onSave }) {
  const [templates, setTemplates] = useState([
    {
      id: "1",
      templateName: "Template 1",
      businessOffer: "",
      subjectLine: "",
      language: "English",
      emailContent: "",
    },
    {
      id: "2",
      templateName: "Template 2",
      businessOffer: "",
      subjectLine: "",
      language: "English",
      emailContent: "",
    },
    {
      id: "3",
      templateName: "Template3",
      businessOffer: "",
      subjectLine: "",
      language: "English",
      emailContent: "",
    },
  ]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const template = e.target.template.value;
    const selectedTemp = templates.find(
      (temp) => temp.templateName === template
    );

    if (template) {
      onSave(selectedTemp);
    }
  };

  const handleAddTemplate = (template) => {
    setTemplates((prev) => [...prev, template]);
    setShowTemplateModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {showTemplateModal ? (
        <AddTemplateModal
          onClose={() => setShowTemplateModal(false)}
          addTemplate={handleAddTemplate}
        />
      ) : (
        <div className="bg-white rounded-lg p-6 w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Cold Email</h2>
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
                Email Template
              </label>
              <select
                name="template"
                className="w-full p-2 border rounded-md"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a template
                </option>
                {templates.map((template) => (
                  <option key={template.id} value={template.templateName}>
                    {template.templateName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowTemplateModal(true);
                }}
                className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                New Template
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
      )}
    </div>
  );
}
