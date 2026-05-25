import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm";
import AuthInput from "../../components/auth/AuthInput";

import { register } from "../../services/authService";

export default function Register() {
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

      const {
        error,
      } = await register(
        email,
        password
      );

      if (error) {
        throw error;
      }

      navigate("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthForm
      title="Create Account"
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
          ? "Creating..."
          : "Register"}
      </button>

      <Link
        to="/login"
        className="block text-center text-blue-400"
      >
        Already have an account?
      </Link>
    </AuthForm>
  );
}