# 📩 Schedule Marketing Email - Frontend

A modern web application built with **React**, **Tailwind CSS**, **Redux Toolkit**,**React Flow** and **React Router DOM**, designed for managing and scheduling marketing email sequences with a clean, responsive UI. It allows users to authenticate, create dynamic flowcharts using nodes, and send marketing campaigns effortlessly.

> 🚀 Live Demo: [Coming Soon](#)

> 📽️ Video Demo: [https://www.loom.com/share/1998a755a1ee4e719806d1d37f32797d](#)

---

## 📁 Project Structure

```
frontend/
├── public/                   # Public assets
├── src/
│   ├── assets/              # Static assets (e.g., images, icons)
│   │   └── react.svg
│   ├── components/          # Reusable React components
│   │   ├── AddNodeModal.jsx
│   │   ├── AddTemplateModal.jsx
│   │   ├── AuthForm.jsx
│   │   ├── EmailModal.jsx
│   │   ├── FlowChart.jsx
│   │   ├── Header.jsx
│   │   ├── LeadSourceModal.jsx
│   │   ├── NodeTypes.jsx
│   │   ├── SuccessModal.jsx
│   │   └── WaitModal.jsx
│   ├── store/               # Redux Toolkit store & slices
│   │   ├── slices/
│   │   │   ├── appSlice.js
│   │   │   └── authSlice.js
│   │   └── store.js
│   ├── App.jsx              # Root component with routes
│   ├── constants.js         # Global constants
│   ├── index.css            # Global styles (Tailwind)
│   ├── main.jsx             # App entry point
│   └── .env                 # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- **React.js** – Modern UI library
- **Tailwind CSS** – Utility-first styling framework
- **Redux Toolkit** – Scalable and maintainable state management
- **React Router** – Client-side routing
- **Vite** – Fast bundler and development server

---

## 📌 Features

- ✅ **User Authentication** – Secure login/register flow
- ✅ **Node-Based Email Flows** – Build email automation using visual nodes
- ✅ **Modular Modals** – Reusable modal components for input and interaction
- ✅ **Success & Waiting Screens** – Better user feedback on email scheduling
- ✅ **Redux-Driven State** – Clear separation of logic with centralized state

---

## 🚧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/emtushar/schedule-marketing-email-frontend.git
   cd schedule-marketing-email-frontend/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173`

---

## 🔐 Environment Variables

Create a `.env` file inside `src/` with the following keys:

```env
VITE_API_BASE_URL=<your-backend-api-url>
```

---

</details>

---

## 🧠 Contribution Guidelines

- Fork this repo
- Create a new branch (`feature/your-feature-name`)
- Commit your changes
- Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by [@emtushar](https://github.com/emtushar)
