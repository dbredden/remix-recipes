import type { LinksFunction } from "react-router"
import { Header } from "~/components/header";
import { Paragraph } from "~/components/paragraph";
import styles from "~/styles/index.css?url";

export const links: LinksFunction = () => {
  return [{rel:  "stylesheet", href: styles }] 
}

export default function Index() {
  return (
    <div>
      <Header>Home</Header>
      <Paragraph>Welcome Home!</Paragraph>
    </div>
  )
}
