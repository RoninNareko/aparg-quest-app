import { Button } from "@mui/material";
import { Select } from "../../../../libs/Dropdowns";

import styles from "./styles.module.scss";

const Filter = () => (
  <section className={styles.filter}>
    <Select title="1 min" description="autorefresh" />
    <Select title="Top Rated" description="Order" />
    <Select title="All Languages" description="Languages" />
    <Button variant="contained" className={styles.restButton}>
      RESET
    </Button>
  </section>
);

export default Filter;
