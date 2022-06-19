import { Button } from "@mui/material";
import styles from "./styles.module.scss";

interface IProps {
  item: any;
}

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
const Content = ({ item }: IProps) => {
  return (
    <section className={styles.contentBlock}>
      <a href={item.url}>{item.title}</a>
      <div className={styles.description}>
        <p>{item.description}</p>
      </div>
      <div className={styles.fioContainer}>
        <div className={styles.miniAutorImage}>
          <img src={item.author_image_url} alt="title img" />
        </div>
        <p>
          <i className="fab fa-twitter"></i>
        </p>
        <p>{item.author_screen_name}</p>
        <p>{item.publishTime} h</p>
      </div>
    </section>
  );
};

const ItemContent = ({ item }: IProps) => {
  return (
    <div className={styles.content}>
      <section className={styles.photoContainer}>
        <img src={item.imageUrls && item.imageUrls[0]} alt="title img" />
      </section>
      <Content item={item} />
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

const StoryItem = ({ item }: IProps) => {
  return (
    <section className={styles.storyItem}>
      <ItemContent item={item} />
      <Footer />
    </section>
  );
};

export default StoryItem;
