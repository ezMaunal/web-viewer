import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/manualId/:manualId"
          element={<MainPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
        <Route
          path="/not-found"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
