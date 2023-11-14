import { BASE_URL } from "./http";
import { ReactElement, useEffect } from "react";
import { Router } from "./routes";
import "./App.module.scss";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { checkAuth } from "./redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { connectSocket } from "./socketio";

function App(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.authSlice);

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (localStorage.getItem('token')) {
        console.log('check auth');

        await dispatch(checkAuth()).then((res: any) => {
          if (typeof res === 'string') {
            navigate('/auth/verify', { replace: true });

            return;
          }

          if (res) {
            console.log('ID', res.payload.id);
            connectSocket(res.payload.id);

            navigate('/app/chats', { replace: true });
          }
        });
      }
    }

    checkAuthStatus();
  }, []);

  useEffect(() => {
    connectSocket(user.id); 
    console.log(user.id, 'connectSocket');
  }, [user.id]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
  