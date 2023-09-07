import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
