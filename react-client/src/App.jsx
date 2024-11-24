import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Doctor } from "./pages/Doctor/Doctor";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "doctor/:name",
        element: <Doctor />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
