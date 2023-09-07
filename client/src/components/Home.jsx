import { useLocation } from "react-router-dom"
import { Navbar } from "./Navbar";

export const Home = () => {
  const location = useLocation();
  return (
    <>
      <Navbar username={location.state.user.username} />
    </>
  )
}

{/* <h1 className="text-indigo-700 text-center text-5xl font-bold">Hi, {location.state.user.username}</h1> */ }