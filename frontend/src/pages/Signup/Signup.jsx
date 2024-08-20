import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/input/PasswordInput";

function Signup() {
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enetr your name");
    }
    if (!validateEmail(email)) {
      setError("please enter a valid email address");
      return;
    }
    if (!password) {
      setError("please enter the password");
      return;
    }
    setError("");

    //sign up API
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10 shadow-xl">
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
              setPassword(e.traget.value);
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
  );
}

export default Signup;
