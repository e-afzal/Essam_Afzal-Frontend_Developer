"use client";

import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/style/components/navbar_overlay.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/images/icons/close.svg";

const NavbarMobileOverlay = ({ menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
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
    <div
      className={styles.overlay_container}
      style={{ display: menuOpen ? "flex" : "none" }}
    >
      <div className={styles.overlay_empty}></div>
      <div className={styles.overlay_menu}>
        <div className={styles.close_container}>
          <Image
            src={cancelIcon}
            alt="Cancel icon"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobileOverlay;
