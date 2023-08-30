import Image from "next/image";

// STYLES
import styles from "@/public/style/components/navbar_mobile.module.scss";

// COMPONENTS
import SpaceXLogo from "@/app/components/Logo";

// ASSET IMPORTS
import menu from "@/public/images/icons/menu.svg";

const NavbarMobile = () => {
  return (
    <nav id={styles.nav_mobile}>
      <div className={styles.nav_container}>
        {/* LOGO */}
        <SpaceXLogo />

        {/* MENU */}
        <button>
          <Image src={menu} />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
