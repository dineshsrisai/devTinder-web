import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId : emailId,
        password : password,
      },{withCredentials : true});
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="email"
                className="input input-info rounded-lg"
                placeholder="email"
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input input-info rounded-lg"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center pt-3">
            <button className="btn btn-info rounded-lg" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
