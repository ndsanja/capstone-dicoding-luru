import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useEffect, useState } from "react";
import { supabase } from "../repository/db";
import { useAtom } from "jotai";
import { sessionStore } from "../stores/stores";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const [session, setSession] = useAtom(sessionStore);

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setError(error);

    if (!error) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/");
    }
  };
  return (
    <div className="login-form">
      <h2 className="title-main">Member Area</h2>
      <h3 className="title-label">Daftar</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input-area"
            id="email"
          />
          {error?.message == "User already registered" && (
            <div>Email already registered</div>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input-area"
            id="password"
          />

          <div>
            {password.length < 6 && (
              <div>Password should be at least 6 characters</div>
            )}
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirm-password" className="input-label">
            Konfirmasi Passsword
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="input-area"
            id="confirm-password"
          />
          {password !== confirmPassword && <div>Password not match</div>}
        </div>
        <button type="submit">Masuk</button>

        <div className="desc-text">
          <p>Sudah punya akun?</p>
          <Link className="link" to="/auth/login">
            Masuk
          </Link>
        </div>

        <div className="forgot-password">
          <Link className="link" to="#">
            Terms & Conditions
          </Link>
        </div>
      </form>
    </div>
  );
}
