import { Link } from "react-router-dom";
import { useState } from "react";
// let form = document.querySelector("#form");
// form.addEventListener();


function SignIn() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  async function post(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div>
      <form
        onSubmit={post}
        method="POST"
        id="formSignIn"
        className="h-screen flex flex-col justify-center items-center gap-3 p-2"
      >
        <h1 className="text-center font-bold pt-3">SIGN IN</h1>
        <input
          name="email"
          value={email?.email}
          type="email"
          placeholder="Email"
          onChange={(e) => { setEmail(e.target.value) }}
          className="sm:w-1/2 md:w-1/2 lg:w-1/4 h-10 bg-gray-100 focus:outline-none border-indigo-700 border-l-4 p-2"
        />
        <input
          name="password"
          value={password?.password}
          type="password"
          placeholder="Password"
          onChange={(e) => { setPassword(e.target.value) }}
          className="sm:w-1/2 md:w-1/2 lg:w-1/4 h-10 bg-gray-100 focus:outline-none border-indigo-700 border-l-4 p-2"
        />
        <div className="grid place-items-center ">
          <input type="submit" className="w-40 rounded-none bg-indigo-700 text-white font-bold hover:bg-indigo-200 hover:text-indigo-700  p-2" />


          <p className="mt-5 gap-x-2 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/signUp" className="p-2 text-indigo-400 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
