import React from "react";
//import { useNavegate, Link } from "react-router-dom";
function SignIn() {
  return (
    <div>
      <form method="POST" className="p-2">
        <h1 className="text-black">SIGN IN</h1>
        <p>Email</p>
        <input type="email" placeholder="Email" className="p-2" />
        <p>Password</p>
        <input type="password" placeholder="Password" className="p-2" />
      </form>
    </div>
  );
}

export default SignIn;
