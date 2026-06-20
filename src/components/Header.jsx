"use client"; // FITUR BARU: perlu jadi client component karena pakai useContext & useRouter

import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; // FITUR BARU: import hook auth
import { useRouter } from "next/navigation"; // FITUR BARU: untuk redirect setelah logout

function Header() {
  // FITUR BARU: ambil status login & fungsi logout dari Context
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  // FITUR BARU: handler logout, set status jadi false lalu redirect ke home
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo"><Link href="/">SISTECH CAFE</Link></div>

        <div className="nav-links">
          <Link href="/menu">Menu</Link>
          <Link href="/about">About Us</Link>
          <Link href="/promo">Promo</Link>

          {/* FITUR BARU: tombol berubah sesuai status login */}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="buttons">Logout</button>
          ) : (
            <Link href="/login" className="buttons">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;