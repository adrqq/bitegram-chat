import { Suspense, lazy, FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { LoadingPage } from "../pages/LoadingPage";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );
};

export const Router: FC = () => {

  const routes = useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        // { path: "reset-password", element: <ResetPasswordPage /> },
        // { path: "new-password", element: <NewPasswordPage /> },
        // {path: "verify", element: <VerifyPage /> },
      ],
    },
    {
      path: '/',
      element: <Navigate to="/app" />,
    },
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/app',
          element: <ChatsPage />,
        }
      ]
    },
  ]);

  return routes;
}

const DefaultLayout = Loadable(lazy(() => import("../layouts/DefaultLayout/DefaultLayout")));
const ChatsPage = Loadable(lazy(() => import("../pages/ChatsPage/ChatsPage")));

const AuthLayout = Loadable(lazy(() => import("../layouts/AuthLayout/AuthLayout")));
const LoginPage = Loadable(lazy(() => import("../pages/LoginPage/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/RegisterPage/RegisterPage")));
