import React, { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

const Card: FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="image" />
      <div className={styles.imageText}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default Card;
