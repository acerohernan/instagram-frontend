import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/private-route";

const HomePage = lazy(() => import("./modules/home/pages/home"));
const LoginPage = lazy(() => import("./modules/auth/pages/login"));
const SignupPage = lazy(() => import("./modules/auth/pages/signup"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
