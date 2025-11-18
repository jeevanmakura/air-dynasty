import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PATH } from "./PATH";
import ResponsiveDrawer from "../components/pages/layout/sidebar";
import App from "../App";

export default function Private() {
  const navigate = useNavigate();
  const user = "arjun";
  React.useEffect(() => {
    if (!user) {
      navigate(PATH.AUTH.LOGIN.ROOT);
    }
  }, [user, navigate]);

  if (!user) return null;
  return (
    <div className="air__root">
      <ResponsiveDrawer>
        <App />
      </ResponsiveDrawer>
    </div>
  );
}
