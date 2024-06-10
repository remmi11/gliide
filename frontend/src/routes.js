import { lazy, Suspense, Fragment } from "react";
import { Route, Routes } from "react-router";

import PageLoad from "./components/pageLoad";
import { AppLayout } from "./layouts";

const routesConfig = [
  {
    path: "/select-animation/:linkedinId",
    layout: AppLayout,
    exact: true,
    component: lazy(() => import("./views/animation")),
  },
  {
    path: "/",
    layout: AppLayout,
    exact: true,
    component: lazy(() => import("./views/home")),
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<PageLoad />}>
      <Routes>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={
                <Layout>
                  {route.children ? (
                    renderRoutes(route.children)
                  ) : (
                    <Component />
                  )}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : null;

function AppRoutes() {
  return renderRoutes(routesConfig);
}

export default AppRoutes;
