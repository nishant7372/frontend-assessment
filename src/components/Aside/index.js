import React from "react";
import styles from "./styles.module.css";

const Aside = () => {
  return (
    <div className={styles["sidebar__container"]}>
      <div className={styles["sidebar__item"]}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.3333V6.66666"
            stroke="#566474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13.3333V2.66666"
            stroke="#566474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 13.3333V9.33334"
            stroke="#566474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Dashboard</p>
      </div>
      <div className={`${styles["sidebar__item"]} ${styles["selected__item"]}`}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_123)">
            <path
              d="M7.99998 9.99999C10.5773 9.99999 12.6666 7.91065 12.6666 5.33332C12.6666 2.75599 10.5773 0.666656 7.99998 0.666656C5.42265 0.666656 3.33331 2.75599 3.33331 5.33332C3.33331 7.91065 5.42265 9.99999 7.99998 9.99999Z"
              stroke="#445EE2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.47335 9.25999L4.66669 15.3333L8.00002 13.3333L11.3334 15.3333L10.5267 9.25333"
              stroke="#445EE2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_123">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className={styles["selected__name"]}>Skill Test</p>
      </div>
      <div className={styles["sidebar__item"]}>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66669 2.02533H4.00002C3.6464 2.02533 3.30726 2.16025 3.05721 2.40042C2.80716 2.64059 2.66669 2.96633 2.66669 3.30598V13.5512C2.66669 13.8908 2.80716 14.2165 3.05721 14.4567C3.30726 14.6969 3.6464 14.8318 4.00002 14.8318H12C12.3536 14.8318 12.6928 14.6969 12.9428 14.4567C13.1929 14.2165 13.3334 13.8908 13.3334 13.5512V6.5076L8.66669 2.02533Z"
            stroke="#566474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.66669 2.02533V6.5076H13.3334"
            stroke="#566474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Internships</p>
      </div>
    </div>
  );
};

export default Aside;
