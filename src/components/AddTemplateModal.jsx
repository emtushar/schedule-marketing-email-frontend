import React, { useId, useState } from "react";

const AddTemplateModal = ({ onClose, addTemplate }) => {
  const id = useId();

  const [formState, setFormState] = useState({
    id: id,
    templateName: "",
    businessOffer: "",
    subjectLine: "",
    language: "English",
    emailContent: "",
  });

  const handleInputChange = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const saveTemplate = () => {
    alert("Template saved!");
    addTemplate(formState);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Template Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Signal: Job Posting"
            value={formState.templateName}
            onChange={(e) => handleInputChange("templateName", e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className=" text-gray-700 font-medium mb-2 flex items-center">
            Business Offer / What are you selling?
            <svg
              className="ml-2 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              className="flex-grow border rounded-lg p-3"
              placeholder="Your Offer, Ex. SEO services for enterprises in USA"
              value={formState.businessOffer}
              onChange={(e) =>
                handleInputChange("businessOffer", e.target.value)
              }
            />

            <div className="relative w-48">
              <select
                className="w-full border rounded-lg p-3 appearance-none bg-white pr-8"
                value={formState.language}
                onChange={(e) => handleInputChange("language", e.target.value)}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Subject Line <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Enter Subject Line"
            value={formState.subjectLine}
            onChange={(e) => handleInputChange("subjectLine", e.target.value)}
          />
        </div>

        <div className="mb-6">
          <textarea
            className="w-full border rounded-lg p-3 min-h-[200px]"
            placeholder="Enter your email content here..."
            value={formState.emailContent}
            onChange={(e) => handleInputChange("emailContent", e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button className="bg-blue-100 text-blue-600 border border-blue-300 font-medium py-2 px-6 rounded">
            Preview & Test
          </button>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="border border-red-500 text-red-500 hover:bg-red-50 font-medium py-2 px-6 rounded"
            >
              Discard
            </button>

            <button
              onClick={saveTemplate}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded"
            >
              Save Email Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTemplateModal;
