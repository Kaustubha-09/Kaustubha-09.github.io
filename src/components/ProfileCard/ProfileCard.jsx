import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ profileImage, name, title, bio, socialLinks }) => {
  return (
    <div className={styles.card}>
      {profileImage && (
        <div className={styles.imageContainer}>
          <img 
            src={profileImage} 
            alt={name}
            className={styles.image}
          />
        </div>
      )}
      
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.bio}>{bio}</p>
        
        {socialLinks && (
          <div className={styles.socialLinks}>
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`}
                className={styles.socialLink}
                aria-label="Email"
              >
                📧
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                💼
              </a>
            )}
            {socialLinks.github && (
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                🔗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
