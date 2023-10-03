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
        { path: "verify", element: <VerifyAccountPage /> },
      ],
    },
    {
      path: '/',
      element: <Navigate to="/app/chats" />,
    },
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/app/chats',
          element: <ChatsPage />,
        },
        {
          path: '/app/settings',
          element: <SettingsPage />,
        },
        {
          path: '/app/user-profile',
          element: <ProfilePage />,
        },
      ]
    },
  ]);

  return routes;
}

const DefaultLayout = Loadable(lazy(() => import("../layouts/DefaultLayout/DefaultLayout")));
const ChatsPage = Loadable(lazy(() => import("../pages/ChatsPage/ChatsPage")));
const ProfilePage = Loadable(lazy(() => import("../pages/ProfilePage/ProfilePage")));
const SettingsPage = Loadable(lazy(() => import("../pages/SettingsPage/SettingsPage")));
const FindModal = Loadable(lazy(() => import("../components/FindModal/FindModal")));

const AuthLayout = Loadable(lazy(() => import("../layouts/AuthLayout/AuthLayout")));
const LoginPage = Loadable(lazy(() => import("../pages/LoginPage/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/RegisterPage/RegisterPage")));
const VerifyAccountPage = Loadable(lazy(() => import("../pages/VerifyAccountPage/VerifyAccountPage")));
