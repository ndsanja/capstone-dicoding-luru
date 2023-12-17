import { Link, Outlet } from "react-router-dom";
// import { TiShoppingCart } from "react-icons/ti";
import "./RootLayout.scss";
import { useAtom } from "jotai";
import { sessionStore } from "../stores/stores";
function RootLayout() {
  const [session, setSession] = useAtom(sessionStore);
  return (
    <>
      <div className="navbar">
        <Link to="/" className=" logo">
          Luru.
        </Link>
        <ul className="daftar-menu">
          {/* <li>
            <Link to="/" className="tautan-menu">
              <TiShoppingCart size="1.8rem" />
            </Link>
          </li> */}
          <li>
            <Link to="/" className="tautan-menu">
              Home
            </Link>
          </li>
          <li>
            {session ? (
              <Link to={`/users?tab=merchants`} className="tautan-menu">
                Profile
              </Link>
            ) : (
              <Link to={`/auth/login`} className="tautan-menu">
                Masuk
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
