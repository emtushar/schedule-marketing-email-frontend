export default function WaitModal({ onClose, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = e.target.duration.value;
    const unit = e.target.unit.value;
    onSave(duration, unit);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wait/Delay</h2>
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
              Duration
            </label>
            <input
              type="number"
              name="duration"
              min="1"
              defaultValue="1"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unit
            </label>
            <select
              name="unit"
              className="w-full p-2 border rounded-md"
              defaultValue="Days"
            >
              <option value="Minutes">Minutes</option>
              <option value="Hours">Hours</option>
              <option value="Days">Days</option>
            </select>
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

// export default function WaitModal({ onClose, onSave }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const duration = formData.get("duration");
//     const unit = formData.get("unit");
//     onSave({ duration, unit });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-96">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Wait/Delay</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ×
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Duration
//             </label>
//             <input
//               type="number"
//               name="duration"
//               min="1"
//               defaultValue="1"
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Unit
//             </label>
//             <select
//               name="unit"
//               className="w-full p-2 border rounded-md"
//               defaultValue="Days"
//             >
//               <option value="Minutes">Minutes</option>
//               <option value="Hours">Hours</option>
//               <option value="Days">Days</option>
//             </select>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function WaitModal({ onClose, onSave }) {
//   const [duration, setDuration] = useState(1);
//   const [unit, setUnit] = useState("Days");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ duration, unit });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-96">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Wait/Delay</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ×
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Duration
//             </label>
//             <input
//               type="number"
//               name="duration"
//               min="1"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Unit
//             </label>
//             <select
//               name="unit"
//               value={unit}
//               onChange={(e) => setUnit(e.target.value)}
//               className="w-full p-2 border rounded-md"
//             >
//               <option value="Minutes">Minutes</option>
//               <option value="Hours">Hours</option>
//               <option value="Days">Days</option>
//             </select>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
