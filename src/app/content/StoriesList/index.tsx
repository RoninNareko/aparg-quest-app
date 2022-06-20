import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { getStoryList } from "../../../store/actionCreators";
import StoryItem from "./StoryItem";
import styles from "./styles.module.scss";

const StoriesList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.listReducer.list);
  const loading = useSelector((state: RootState) => state.listReducer.loading);
  const error = useSelector((state: RootState) => state.listReducer.error);

  useEffect(() => {
    dispatch(getStoryList(null));
  }, [dispatch]);

  return (
    <section className={styles.storiesContainer}>
      <div className={styles.container}>
        {!loading && list.length ? (
          list.map((item, idx) => <StoryItem key={idx} item={item} />)
        ) : loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>No stories</div>
        )}
      </div>
    </section>
  );
};

export default StoriesList;
