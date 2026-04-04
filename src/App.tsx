import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "/src/pages/image-library.jsx";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/changelog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/image-library" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/changelog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
