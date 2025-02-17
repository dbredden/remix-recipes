import { Link, Outlet } from "react-router";

export default function About() {
  return (
    <div>
        <h2>ABOUT US</h2>
        <p>This is the about page</p>
        <nav>
            <Link to="team">Team</Link>
            <Link to="history">History</Link>
        </nav>
        <Outlet/>
    </div>
  );
}