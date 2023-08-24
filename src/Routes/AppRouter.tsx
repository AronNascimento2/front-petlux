import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_PATH } from "./routesPath";


const AppRouter = () => {
  const routes = ROUTES_PATH
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
