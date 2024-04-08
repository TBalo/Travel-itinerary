import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import PageLayout from "@/layout/PageLayout";

const PageRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default PageRoutes;
