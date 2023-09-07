import { Link } from "react-router-dom"
export const Navbar = (props) => {
  return (
    <div className="navbar navbar-sticky">
      <div className="navbar-start">
        <a href="" className="navbar-item text-indigo-600 font-bold">BLOGS</a>
      </div>
      <div class="navbar-center">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">About</a>
      </div>
      <div className="navbar-end">
        <a class="navbar-item font-bold">{props.username}</a>
        <Link to="/" className="navbar-item outline outline-indigo-700 hover:bg-indigo-700">Log out</Link>
      </div>
    </div>
  )
}
