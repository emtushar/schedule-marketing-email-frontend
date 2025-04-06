import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants.js";
const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (isRegister) {
      // hit api to register
      // dispatch user to store
      try {
        const data = await fetch(`${API_URL}/user/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
            name: form.name,
            gender: form.gender,
          }),
        });
        const res = await data.json();
        const { email, name, gender } = res.data;
        dispatch(login({ email, name, gender }));
        setLoading(false);
        navigate("/");
      } catch (error) {
        navigate("/login");
        setIsRegister(true);
        console.log(error);
      }
    } else {
      try {
        // hit api to login
        // dispatch user to store
        const data = await fetch(`${API_URL}/user/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });
        const res = await data.json();
        const { email, name, gender } = res.data.loggedUser;
        dispatch(login({ email, name, gender }));
        setLoading(false);
        navigate("/");
      } catch (error) {
        navigate("/login");
        setIsRegister(false);
        console.log(error);
      }
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ name: "", email: "", password: "", gender: "" });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegister ? "Create Account" : "Login"}
        </h2>

        {isRegister && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {isRegister && (
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        )}

        <button
          type="submit"
          className={`w-full ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600 transition"
          } text-white py-2 rounded-lg   mb-4`}
          disabled={loading}
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <div className="text-center text-sm text-gray-600">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            onClick={toggleMode}
            className="text-blue-500 hover:underline ml-1"
          >
            {isRegister ? "Login" : "Create one"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
