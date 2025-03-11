// Example of how to import a css file in RR7
/* import type { Route } from "./+types/discover";
import styles from "~/styles/index.css?url"

export const links: Route.LinksFunction = () => {
  return[{rel: "stylesheet", href: styles}]
} */

export default function Discover() {
  return (
    <div>
        <h2>Discover</h2>
        <p>This is the discover page</p>
    </div>
  );
}

