import { useLocation } from "react-router-dom"

export const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="text-indigo-700 text-center text-5xl font-bold">Hi, {location.state.username}</h1>
    </div>
  )
}
