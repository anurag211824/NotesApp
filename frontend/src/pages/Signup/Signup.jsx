import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/PasswordInput";
import axios from "axios";
import { validateEmail } from "../../utils/helper";
import {toast} from "react-toastify"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return; // Add return to prevent further execution
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        { username: name, email, password },
        { withCredentials: true }
      );
      if (res.data.success === false) {
        toast.error(res.data.message)
        setError(res.data.message);
        return;
      }
      toast.success(res.data.message)
      setError(""); // Clear any previous errors
      navigate("/login"); // Corrected navigate usage
    } catch (err) {
      // Adjusted catch block
      toast.error(err.message)
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10 shadow-xl">
          <h1 className="text-4xl font-bold text-black py-4 text-center mb-8">
            <span className="text-slate-500">One</span>
            <span className="text-slate-900">Note</span>
          </h1>

          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7 ">Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box shadow-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box shadow-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              SIGN UP
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className="font-medium text-[#2B85FF] underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
