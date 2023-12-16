import { Link } from "react-router-dom";
import "./reset-password.scss";

export default function ResetPassword() {
  return (
    <div className="login-form">
      <h3 className="title-label">Reset Password</h3>
      <form>
        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input type="email" className="input-area" id="email" />
        </div>

        <button type="submit">Reset Password</button>

        <div className="desc-text">
          <p>Kembali ke member are</p>
          <div className="link-wrapper">
            <Link className="link" to="/auth/register">
              Daftar
            </Link>
            <Link className="link" to="/auth/login">
              Masuk
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
