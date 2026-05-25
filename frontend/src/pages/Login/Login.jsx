import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm";
import AuthInput from "../../components/auth/AuthInput";

import { login, } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const { error, token } = await login(email, password);

      if (error) {
        throw error;
      }

      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
    >
      <AuthInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <AuthInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        disabled={loading}
        className="
          w-full
          rounded-lg
          bg-blue-600
          py-3
          font-medium
        "
      >
        {loading
          ? "Signing In..."
          : "Login"}
      </button>

      <Link
        to="/register"
        className="block text-center text-blue-400"
      >
        Create Account
      </Link>
    </AuthForm>
  );
}