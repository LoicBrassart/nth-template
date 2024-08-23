import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import HomePage, { HomeLoader } from "./pages/HomePage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        loader: () => {
          return HomeLoader();
        },
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // {
      //   path: "/ads/:id/:slug",
      //   element: <AdDetail />,
      //   loader: ({ params }) => {
      //     return AdDetailLoader(params.id!);
      //   },
      // },
    ],
  },
]);
export default router;
