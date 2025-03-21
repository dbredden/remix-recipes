import {
  isRouteErrorResponse,
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
  useResolvedPath
} from "react-router";

import classNames from 'classnames';
import type { Route } from "./+types/root";
import "./app.css";
import { HomeIcon, DiscoverIcon, RecipeBookIcon, SettingsIcon } from "./components/icons";
import { useNavigation } from "react-router";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  }
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Remix Recipes" },
    { name: "description", content: "Welcome to the Remix Recipes app!" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="md:flex md:h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <nav className="bg-primary text-white">
        <ul className="flex md:flex-col">
        <li><AppNavLink to="/"><HomeIcon/></AppNavLink></li>
        <li><AppNavLink to="discover"><DiscoverIcon/></AppNavLink></li>
        <li><AppNavLink to="app"><RecipeBookIcon/></AppNavLink></li>
        <li><AppNavLink to="settings"><SettingsIcon/></AppNavLink></li>
        </ul>
      </nav>
      <div className = "p-4">
        <Outlet />
      </div>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}


type AppNavLinkProps = {
  children: React.ReactNode;
  to: string;
}
function AppNavLink({children, to} : AppNavLinkProps) {
  const path = useResolvedPath(to);
  const navigation = useNavigation();

  const isLoading = 
    navigation.state === "loading" && navigation.location.pathname === path.pathname;
  return (
    <li className="w-16">
      <NavLink to={to}>
        {({isActive}) => (
          <div 
          className={classNames(
            "py-4 flex justify-center hover:bg-primary-light",
            isActive? "bg-primary-light" : "",
            isLoading ? "animate-pulse bg-primary-light" : ""
          )}
        >
          {children}
        </div>
        )}
      </NavLink>
    </li>
  )
}
