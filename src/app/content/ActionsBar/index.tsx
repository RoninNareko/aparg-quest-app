import { FilterButton, RefreshButton } from "../../../libs/Buttons";
import Filter from "./Filter";

import styles from "./styles.module.scss";

const ActionsBar = () => (
  <section className={styles.actionsBar}>
    <div className={styles.buttons}>
      <RefreshButton />
      <FilterButton />
    </div>
    <Filter />
  </section>
);

export default ActionsBar;
