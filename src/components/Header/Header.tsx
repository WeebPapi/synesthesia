import React from "react";
import styles from "./Header.module.css";
import { data } from "../../assets";
import { Card } from "../";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1>Synesthesia</h1>
        <h2>Express Your Unique Taste</h2>
      </div>
      <div className={styles.cards}>
        {data.map((card) => (
          <Card
            title={card.title}
            subtitle={card.subtitle}
            image={card.Image}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
