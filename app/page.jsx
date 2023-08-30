import Image from "next/image";

// STYLES
import styles from "@/public/style/page/home.module.scss";

// ASSET IMPORTS
import hero_desktop from "@/public/images/desktop/hero.jpg";
import hero_mobile from "@/public/images/mobile/hero.jpg";
import travel_desktop from "@/public/images/desktop/travel.jpg";
import travel_mobile from "@/public/images/mobile/travel.jpg";
import Link from "next/link";

export default function Home() {
  const facts = [
    { title: "total launches", figure: 42 },
    { title: "visits to the iss", figure: 37 },
    { title: "total reflights", figure: 19 },
  ];

  return (
    <main id={styles.main}>
      {/* SECTION: HERO */}
      <section id={styles.hero}>
        <Image
          className={styles.hero_image_desktop}
          src={hero_desktop}
          alt="Closeup of a Dragon as it approaches the International Space Station for docking"
        />
        <Image
          className={styles.hero_image_mobile}
          src={hero_mobile}
          alt="Closeup of a Dragon as it approaches the International Space Station for docking"
        />
        <div className={styles.hero_content}>
          <h2>dragon</h2>
          <p>sending humans and cargo into space</p>
        </div>
      </section>

      {/* FACTS */}
      <section id={styles.facts}>
        <ul className={styles.facts_container}>
          {facts.map((fact, index) => (
            <li key={index}>
              <h3>{fact.figure}</h3>
              <p>{fact.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* TRAVEL */}
      <section id={styles.travel}>
        <Image
          src={travel_desktop}
          alt="A portrait of an astronaut wearing a SpaceX space suit"
          className={styles.travel_desktop}
        />
        <Image
          src={travel_mobile}
          alt="A portrait of an astronaut wearing a SpaceX space suit"
          className={styles.travel_mobile}
        />
        <div className={styles.travel_content}>
          <h2>taking humans to space</h2>
          <p>
            In 2020, SpaceX returned America’s ability to fly NASA astronauts to
            and from the International Space Station on American vehicles for
            the first time since 2011. In addition to flying astronauts to space
            for NASA, SpaceX’s Dragon spacecraft can also carry commercial
            astronauts to Earth orbit, the ISS or beyond.
          </p>
          <Link href={"#"}>learn more</Link>
        </div>
      </section>
    </main>
  );
}
