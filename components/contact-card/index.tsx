//Amadeo Costaldi

import React from 'react';
import styles from './contact-card.module.css';
import { StaticImageData } from 'next/image';

interface ContactCardProps {
    profilePicture: StaticImageData;
    name: string;
    role: string;
    email: string;
  }

const ContactCard: React.FC<ContactCardProps> = ({ profilePicture, name, role, email }) => {
    return (
      <div className={styles.contactCard}>
        <img src={profilePicture.src} alt={name} className={styles.profilePicture} />
        <div className={styles.details}>
          <h2>{name}</h2>
          <p>{role}</p>
          <p>{email}</p>
        </div>
      </div>
    );
};
  
export default ContactCard;