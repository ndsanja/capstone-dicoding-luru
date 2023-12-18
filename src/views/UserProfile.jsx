import { useNavigate, useSearchParams } from "react-router-dom";

import { useAtom } from "jotai";
import { sessionStore, userStore } from "../stores/stores";
import UserList from "../components/User/UserList";
import UserLike from "../components/User/UserLike";
import UserSetting from "../components/User/UserSetting";
import "./UserProfile.scss";
import {
  HiBuildingStorefront,
  HiCog6Tooth,
  HiHeart,
  HiListBullet,
} from "react-icons/hi2";
import { getCurrentUser, publicUrl } from "../repository/supabase";
import UserStoreList from "../components/User/UserStoreList";
import { useEffect } from "react";

export default function UserProfile() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useAtom(userStore);
  const [session, setSession] = useAtom(sessionStore);

  useEffect(() => {
    if (!session) {
      navigate("/auth/login");
    }
  }, [session]);

  const handleButtonAction = (params) => {
    setSearchParams(`tab=${params}`);
  };

  return (
    <div className="profile-wrapper">
      <div className="top-section">
        <img src={`${publicUrl}/${user?.id}/${user?.avatar_url}`} />
        <p>{user?.full_name}</p>
      </div>
      <div className="button-options">
        <button
          onClick={() => handleButtonAction("merchants")}
          className="option"
        >
          <HiBuildingStorefront />
        </button>
        <button onClick={() => handleButtonAction("list")} className="option">
          <HiListBullet />
        </button>
        <button onClick={() => handleButtonAction("like")} className="option">
          <HiHeart />
        </button>
        <button
          onClick={() => handleButtonAction("setting")}
          className="option"
        >
          <HiCog6Tooth />
        </button>
      </div>
      <div className="content">
        {searchParams.get("tab") === "merchants" && <UserStoreList />}
        {searchParams.get("tab") === "list" && <UserList />}
        {searchParams.get("tab") === "like" && <UserLike />}
        {searchParams.get("tab") === "setting" && <UserSetting />}
      </div>
    </div>
  );
}
