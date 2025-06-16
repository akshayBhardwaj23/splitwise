import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router";
import Spinner from "../utilities/Spinner";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const success = await login(username, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute opacity-60 top-0 left-0 w-full h-dvh bg-gray-600 flex items-center justify-center z-10">
          <Spinner />
        </div>
      )}
      <div className="flex justify-center m-10">
        <h1 className="text-4xl">Login</h1>
      </div>

      <div className="flex justify-center mt-8">
        <form className="w-2/4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="m-4 p-4 border-[2px] border-solid border-slate-300 rounded-lg w-full"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="m-4 p-4 border-[2px] border-solid border-slate-300 rounded-lg w-full"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <button
            className="m-4 p-4 bg-gray-950 text-pink-400 w-full rounded-lg hover:bg-pink-400 hover:text-gray-950"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
