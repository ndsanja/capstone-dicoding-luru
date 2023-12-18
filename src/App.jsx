import { useAtom } from "jotai";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { locationStore, sessionStore, userStore } from "./stores/stores";
import { useEffect, useState } from "react";
import { supabase } from "./repository/db";
import { getCurrentUser } from "./repository/supabase";
import { useGeolocated } from "react-geolocated";

function App() {
  const [session, setSession] = useAtom(sessionStore);
  const [user, setUser] = useAtom(userStore);
  const [location, setLocation] = useAtom(locationStore);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  if (isGeolocationAvailable && isGeolocationEnabled) {
    setLocation(coords);
  }

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

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await getCurrentUser(session?.user?.id);
      if (!error) {
        setUser(data);
      }
    };

    getUser();
  }, [session?.user?.id]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
