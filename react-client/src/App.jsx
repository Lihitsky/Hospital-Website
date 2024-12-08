import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initial } from "./redux/commonReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Doctor } from "./pages/Doctor/Doctor";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";

import { Admin } from "./pages/Admin";
import { NewsList } from "./pages/Admin/NewsList";
import { NewsCreate } from "./pages/Admin/NewsCreate";
import { NewsDelete } from "./pages/Admin/NewsDelete";

import { Circles } from "react-loader-spinner";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
      {
        path: "admin",
        element: (
          <Admin title="Новини">
            <NewsList />
          </Admin>
        ),
      },
      {
        path: "admin/news/create",
        element: (
          <Admin title="Створення новини">
            <NewsCreate />
          </Admin>
        ),
      },
      {
        path: "admin/news/delete",
        element: <NewsDelete />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.isLoading);
  const error = useSelector((state) => state.common.error);

  useEffect(() => {
    dispatch(initial());
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Circles
          height="40"
          width="40"
          color="#247cff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
