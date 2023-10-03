import React, { ReactElement, useEffect } from "react";
import { Router } from "./routes";
import "./App.module.scss";
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function App(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("check auth");

      dispatch(checkAuth()).then((res: any) => {
        if (!res) {
          console.log("error");

          return;
        }

        navigate("/app/chats");

        console.log(`res`, res);
      });
    }
  }, []);
    
  return (
    <>
      <Router />
    </>
  );
}

export default App;
