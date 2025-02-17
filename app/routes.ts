import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("discover", "routes/discover.tsx"),
  route("app", "routes/app.tsx"),

  route("settings", "routes/settings.tsx", [
    route("app", "routes/settings/app.tsx"),
    route("profile", "routes/settings/profile.tsx"),
  ]),
  route("about", "routes/about.tsx", [
    route("team", "routes/about/team.tsx"),
    route("history", "routes/about/history.tsx")
  ])
] satisfies RouteConfig;
