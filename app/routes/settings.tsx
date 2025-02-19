import { Link, Outlet } from "react-router";
import type { Route } from "./+types/settings";

export async function loader({params} : Route.LoaderArgs) {
  return new Response(JSON.stringify({message: "Hello there!"}), {
    status: 418,
    headers: {
      "Content-Type": "application/json",
      custom: "custom header",
    },
  });
};

export default function Settings({loaderData}: Route.ComponentProps) {
  return (
    <div>
      <h2>Settings</h2>
      <p>This is the settings page</p>
      <p>This is a message from loader: {loaderData}</p>
      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
