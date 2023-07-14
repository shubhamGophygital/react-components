import styles from "./ExpandCardList1.module.css";

const ExpandCardList = ({ items }) => {
  return (
    <div className={styles.container}>
      {items?.map((item, index) => {
        return (
          <div className={styles.cardContainer} key={`expansion-card-${index}`}>
            <img className={styles.image} src={item.src} alt="_" />
            {(!!item.label || !!item.description) && (
              <div className={styles.content}>
                <p className={styles.label}>{item.label}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ExpandCardList;
