import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/common/HeroSection";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
    ],
  },
]);

export default router;
