import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Doctor } from "./pages/Doctor/Doctor";

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
        path: "doctor/:name",
        element: <Doctor />,
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
