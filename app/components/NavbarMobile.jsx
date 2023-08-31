"use client";
import { useState } from "react";
import Image from "next/image";

// STYLES
import styles from "@/public/style/components/navbar_mobile.module.scss";

// COMPONENTS
import SpaceXLogo from "@/app/components/Logo";
import NavbarMobileOverlay from "@/app/components/NavbarMobileOverlay";

// ASSET IMPORTS
import menu from "@/public/images/icons/menu.svg";

const NavbarMobile = () => {
  // STATE
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id={styles.nav_mobile}>
      <div className={styles.nav_container}>
        {/* NAVBAR OVERLAY */}
        <NavbarMobileOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* LOGO */}
        <SpaceXLogo />

        {/* MENU */}
        <button>
          <Image
            src={menu}
            alt="Hamburger menu"
            onClick={() => setMenuOpen(true)}
          />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
