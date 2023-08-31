"use client";

import { useState, useEffect } from "react";

// STYLES
import styles from "@/public/style/components/page/home/search_form.module.scss";

// COMPONENTS
import GridCard from "@/app/components/page/home/search/GridCard";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [originalDragons, setOriginalDragons] = useState([]);
  const [filteredDragons, setFilteredDragons] = useState([]);

  // USE EFFECT - Fetch Dragon Data
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/dragons")
      .then((res) => res.json())
      .then((data) => {
        setOriginalDragons(data);
        setFilteredDragons(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  //? HANDLERS
  const searchHandler = () => {
    const filteredQueryKeyword = searchQuery.trim();
    const filteredData = originalDragons.filter((dragon) =>
      dragon.name.toLowerCase().includes(filteredQueryKeyword)
    );
    setFilteredDragons(filteredData);
    //! If no query provided, return original data
    if (filteredQueryKeyword === "") setFilteredDragons(originalDragons);
  };

  return (
    <div className={styles.search_form_container}>
      <h2 className={styles.search_title}>search dragon</h2>
      <p className={styles.search_description}>
        Search a dragon by its name or type
      </p>

      <div className={styles.search_form}>
        <div className={styles.search_field_container}>
          <input
            type="text"
            id={styles.search_field}
            placeholder="enter name, type or status"
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
          <button id={styles.search_field_button} onClick={searchHandler}>
            search
          </button>
        </div>
        <div className={styles.search_data_grid}>
          {/* RESULTS */}
          {filteredDragons.length >= 1 &&
            filteredDragons.map((dragon, index) => (
              <div key={index}>
                <GridCard styles={styles} data={dragon} />
              </div>
            ))}
        </div>
        {filteredDragons.length === 0 && (
          <h2 className={styles.empty_result}>No results found</h2>
        )}
      </div>
    </div>
  );
}
