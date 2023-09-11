import { Suspense, lazy, FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ChatsPage } from "../pages/ChatsPage";

export const Router: FC = () => {
  const isUserLoggedIn = false;

  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />,
    },
    {
      path: '/home',
      element: <DefaultLayout />,
      children: [
        {
          path: '/home',
          element: <ChatsPage />,
        }
      ]
    }
  ]);

  return routes;
}