import Link from "next/link";

// STYLES
import styles from "../../public/style/components/footer.module.scss";

// COMPONENTS
import SpaceXLogo from "./Logo";

export default function Footer() {
  const footerLinks = [
    { title: "privacy policy", url: "#" },
    { title: "suppliers", url: "#" },
  ];
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_container}>
        <SpaceXLogo />

        <ul>
          {footerLinks.map((each, index) => (
            <li key={index}>
              <Link href={each.url}>{each.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
