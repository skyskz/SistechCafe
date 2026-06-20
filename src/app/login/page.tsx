"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function Page() {
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.length < 5) {
      setError("Username minimal 5 karakter.");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    setError("");
    login();
    router.push("/");
  };

  return (
    <section className="main-heading">
      <h1>Login</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Uname"
          className="input-field"
          value={username}
          onChange={(e) => setUname(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="buttons">Login</button>
      </form>
    </section>
  );
}

export default Page;