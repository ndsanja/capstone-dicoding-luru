import { Link, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import "./RootLayout.scss";
function RootLayout() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className=" logo">
          Luru.
        </Link>
        <ul className="daftar-menu">
          <li>
            <Link to="/" className="tautan-menu">
              <TiShoppingCart size="1.8rem" />
            </Link>
          </li>
          <li>
            <Link to="/" className="tautan-menu">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users/:id" className="tautan-menu">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
