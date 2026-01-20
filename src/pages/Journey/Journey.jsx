import React, { useEffect, useRef } from "react";
import journeyData from "../../data/Journey.json";
import styles from "./Journey.module.css";

const Journey = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "#64ffda";
      case "education":
        return "#4dd0e1";
      case "leadership":
        return "#ff6b9d";
      case "personal":
        return "#ffd93d";
      default:
        return "#64ffda";
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Journey</h2>
      <p className={styles.subtitle}>
        A blend of professional growth and personal passions - from graduate student to research leader, intertwined with photography, travel, history, and the joy of capturing life's moments.
      </p>
      
      <div className={styles.timeline}>
        {journeyData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (itemsRef.current[idx] = el)}
            className={styles.timelineItem}
            style={{ "--type-color": getTypeColor(item.type) }}
          >
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot}></div>
              {idx !== journeyData.length - 1 && <div className={styles.markerLine}></div>}
            </div>
            
            <div className={styles.timelineContent}>
              {item.icon && (
                <span className={styles.personalIcon}>{item.icon}</span>
              )}
              {item.promotion && (
                <span className={styles.promotionBadge}>Promotion</span>
              )}
              <div className={styles.timelineHeader}>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.type} style={{ color: getTypeColor(item.type) }}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <h4 className={styles.organization}>{item.organization}</h4>
              <p className={styles.location}>{item.location}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
