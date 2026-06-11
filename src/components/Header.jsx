import Link from "next/link";

function Header() {
  return (
    <header className="header">
          <nav>
            <div className="logo"><Link href="/">SISTECH CAFE</Link></div>

            <div className="nav-links">
                <Link href="/menu">Menu</Link>
                <Link href="/about">About Us</Link>
                <Link href="/promo">Promo</Link>
                <Link href="/login" className="buttons">Login</Link>
            </div>

          </nav>
        </header>
  )
}

export default Header