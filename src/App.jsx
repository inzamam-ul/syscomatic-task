import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// react components.
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.route}
              path={route.route}
              element={<route.component />}
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
