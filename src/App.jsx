import React, { useEffect, useState } from "react";
import FlowChart from "./components/FlowChart.jsx";
import Header from "./components/Header.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function App() {
  // show flowchart if it is logged
  // if not logged navigate to login
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!loggedUser) {
      navigate("/login");
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Header />
          <FlowChart />
        </div>
      )}
    </>
  );
}

export default App;
