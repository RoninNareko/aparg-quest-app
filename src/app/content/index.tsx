import ActionsBar from "./ActionsBar";
import StoriesList from "./StoriesList";
import styles from "./styles.module.scss";
import Title from "./Title/Index";

const WatchList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.middleContainer}>
          <Title />
          <ActionsBar />
          <StoriesList />
        </div>
      </div>
    </section>
  );
};

export default WatchList;
