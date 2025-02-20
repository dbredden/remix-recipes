import { Link, Outlet, useLoaderData, type LoaderFunction } from "react-router";
import type { Route } from "./+types/settings";

export const loader: LoaderFunction = async() => {
  const data = {message: "Hello from the server"};

  const response = new Response(JSON.stringify(data), {
    status: 202,
    headers: {
      'Content-Type': 'application/json',
      'Custom-Header': 'Custom Value'
    }
  });

  return response;
}

export default function DataFetcher() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Data from loader</h1>
      <p>{data.message}</p>
    </div>
  )
}
/* 
export async function loader2({} : Route.LoaderArgs) {
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
} */
