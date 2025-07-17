const routesB = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RouteB = (typeof routes)[keyof typeof routes];

const gotoRouteB = (route: RouteB) => {
  console.log("Navigating to", route);
};
