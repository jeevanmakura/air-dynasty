import React from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import ResponsiveDrawer from "../components/pages/layout/sidebar";
import { PATH } from "./PATH";

export default function Private() {
  const navigate = useNavigate();
  const user = {
    name: "John Doe",
    role: "agent",
  };
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
