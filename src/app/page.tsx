import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">

        <div className="hero-content">
          <h1 className="hero-title">SISTECH CAFE</h1>
          <p className="hero-subtitle">
            Local Coffee Brewed by Extraordinary Women in Indonesia
          </p>
          <Link href="/menu" className="buttons">See Our Menu</Link>
        </div>

        <div className="hero-image">
          <Image 
            src="/hero.jpg"
            alt="Hero Image"
            height={500}
            width={500}
          />
        </div>

      </div>
    </div>
  );
}