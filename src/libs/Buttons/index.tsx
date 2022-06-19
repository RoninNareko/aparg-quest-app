import { Button } from "@mui/material";

import styles from "./styles.module.scss";

export const RefreshButton = () => (
  <Button
    className={styles.button}
    variant="outlined"
    startIcon={<i className="fas fa-redo"></i>}
  >
    Refresh
  </Button>
);

export const FilterButton = () => (
  <Button
    className={styles.button}
    variant="outlined"
    startIcon={<i className="fas fa-filter"></i>}
  >
    Filter
  </Button>
);
