import { Button } from "@mui/material";
import styles from "./styles.module.scss";

const Actions = () => {
  return (
    <section className={styles.actionsBlock}>
      <div className={styles.actions}>
        <Button variant="outlined">54%</Button>
      </div>
      <div className={styles.show}>
        <i className="fas fa-angle-down"></i>
      </div>
    </section>
  );
};
const Content = () => {
  return (
    <section className={styles.contentBlock}>
      <a href="/#" target="_blank">
        Intel Corporation (NASDAQ:INTC), Apple Inc. (NASDAQ:AAPL) - Intel
        Analyst Plays Down Beat-and-Raise Quarter Amid Caution Over Second-Half
        Fundamentals
      </a>
      <div className={styles.description}>
        <p>
          Hours after receiving a record $5 billion FTC fine on privacy
          violations, Facebook delivered a Q2 earnings beat with revenue of
          $16.9 billion with $1.99 adjusted EPS compared to the Zacks Consensus
          Estimate of $1.90 EPS on revenue of $16.45 billion.
        </p>
      </div>
      <div className={styles.fioContainer}>
        <div className={styles.miniAutorImage}>
          <img
            src="https://blog.twnic.tw/wp-content/uploads/2021/11/1108-1112_Facebook-%E5%B0%87%E6%9B%B4%E5%90%8D%E7%82%BA-Meta.jpg"
            alt="title img"
          />
        </div>
        <p>
          <i className="fab fa-twitter"></i>
        </p>
        <p>@GeorgeMentz5</p>
        <p>16 h</p>
      </div>
    </section>
  );
};

const ItemContent = () => {
  return (
    <div className={styles.content}>
      <section className={styles.photoContainer}>
        <img
          src="https://blog.twnic.tw/wp-content/uploads/2021/11/1108-1112_Facebook-%E5%B0%87%E6%9B%B4%E5%90%8D%E7%82%BA-Meta.jpg"
          alt="title img"
        />
      </section>
      <Content />
      <Actions />
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <button>
        <i className="fas fa-thumbs-up"></i> Like
      </button>
      <button>
        <i className="fas fa-thumbs-down"></i> Dislike
      </button>
      <button>
        <i className="fas fa-bookmark"></i> Bookmark
      </button>
    </div>
  );
};

const StoryItem = () => {
  return (
    <section className={styles.storyItem}>
      <ItemContent />
      <Footer />
    </section>
  );
};

export default StoryItem;
