import { useAtom } from "jotai";
import "./App.css";
// import Navigation from "./components/Navigation";
import AppRoutes from "./routes/AppRoutes";
import { sessionStore, userStore } from "./stores/stores";
import { useEffect, useState } from "react";
import { supabase } from "./repository/db";
import { useNavigate } from "react-router-dom";

function App() {
  const [session, setSession] = useAtom(sessionStore);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (!session && window.location.pathname?.split("/")?.[1] !== "auth") {
  //     navigate("/auth/login");
  //   }
  // }, [session, navigate]);

  return (
    <>
      {/* <Navigation /> */}
      <AppRoutes />
    </>
  );
}

export default App;
