"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// STYLES
import styles from "@/public/style/components/page/home/search_modal.module.scss";

// ASSET IMPORT
import cancelIcon from "@/public/images/icons/close.svg";
import dragonImage from "@/public/images/mobile/renders/Dragon_Render_Mobile.jpg";

const SingleDragon = ({ params: { id } }) => {
  const [dragonData, setDragonData] = useState(null);

  // USE EFFECT - Fetch Dragon Data
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDragonData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (dragonData !== null) {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_container}>
          <Link href={"/"} className={styles.popup_close}>
            <Image
              src={cancelIcon}
              alt="Cancel icon"
              className={styles.close_icon}
            />
          </Link>
          <div className={styles.popup_grid}>
            <div className={styles.popup_image}>
              <Image
                src={dragonImage}
                alt="Generic image of a Dragon Capsule"
              />
            </div>
            <div className={styles.popup_content}>
              <h2 className={styles.popup_name}>{dragonData.name}</h2>
              <div className={styles.popup_table}>
                <div className={styles.fact_row}>
                  <p>height</p>
                  <p className={styles.fact}>
                    {`${dragonData.height_w_trunk.meters}m `} /{" "}
                    <span>{`${dragonData.height_w_trunk.feet} ft`}</span>
                  </p>
                </div>
                <div className={styles.fact_row}>
                  <p>diameter</p>
                  <p className={styles.fact}>
                    {`${dragonData.diameter.meters}m `} /{" "}
                    <span>{`${dragonData.diameter.feet} ft`}</span>
                  </p>
                </div>
                <div className={styles.fact_row}>
                  <p>trunk volume</p>
                  <p className={styles.fact}>
                    {`${dragonData.trunk.trunk_volume.cubic_meters}m`}
                    {""}
                    <sup>3</sup> /{" "}
                    <span>
                      {`${dragonData.trunk.trunk_volume.cubic_feet} ft`}
                      <sup>3</sup>
                    </span>
                  </p>
                </div>
                <div className={styles.fact_row}>
                  <p>launch payload mass</p>
                  <p className={styles.fact}>
                    {`${dragonData.launch_payload_mass.kg}kg `} /{" "}
                    <span>{`${dragonData.launch_payload_mass.lb} lb`}</span>
                  </p>
                </div>
                <div className={styles.fact_row}>
                  <p>return payload mass</p>
                  <p className={styles.fact}>
                    {`${dragonData.return_payload_mass.kg}kg `} /{" "}
                    <span>{`${dragonData.return_payload_mass.lb} lb`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleDragon;
