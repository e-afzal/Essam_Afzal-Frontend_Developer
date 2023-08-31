import Link from "next/link";

// STYLES
import styles from "../../public/style/components/navbar.module.scss";

// COMPONENTS
import SpaceXLogo from "./Logo";

export default function Navbar() {
  const navLinks = [
    { title: "falcon 9", url: "#" },
    { title: "falcon heavy", url: "#" },
    { title: "dragon", url: "#" },
    { title: "starship", url: "#" },
    { title: "human spaceflight", url: "#" },
    { title: "rideshare", url: "#" },
    { title: "starshield", url: "#" },
    { title: "starlink", url: "#" },
  ];

  return (
    <nav id={styles.nav_desktop}>
      <div className={styles.nav_container}>
        {/* LOGO */}
        <SpaceXLogo />

        {/* NAVBAR LIST ITEMS */}
        <ul className={styles.nav_items}>
          {navLinks.map((navLink, index) => (
            <li key={index} className={styles.nav_item}>
              <Link href={navLink.url}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
