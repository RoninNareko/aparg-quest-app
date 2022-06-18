import StoryItem from "./StoryItem";
import styles from "./styles.module.scss";

const StoriesList = () => {
  return (
    <section className={styles.storiesContainer}>
      <div className={styles.container}>
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </section>
  );
};

export default StoriesList;
