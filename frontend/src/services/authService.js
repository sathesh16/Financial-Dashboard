import { apiFetch } from "./api";

export function register( email, password ) {
  return apiFetch(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
}

export function login( email, password ) {
  return apiFetch(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
}

export function logout() {
  localStorage.removeItem(
    "token"
  );

  window.location.href =
    "/login";
}

export function getMe() {
  return apiFetch(
    "/users/me"
  );
}