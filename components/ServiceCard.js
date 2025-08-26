// components/ServiceCard.js
import React from 'react';
import styles from '@/styles/Services.module.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ServiceCard;