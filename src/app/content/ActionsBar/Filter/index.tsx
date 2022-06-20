import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Select } from "../../../../libs/Dropdowns";
import { RootState } from "../../../../store";
import styles from "./styles.module.scss";

const Filter = () => {
  const languages = useSelector(
    (state: RootState) => state.filterReducer.languages
  );
  return (
    <section className={styles.filter}>
      <Select
        title="All Languages"
        description="Languages"
        data={languages.list}
      />
      <Button
        variant="contained"
        onClick={(e) => e.preventDefault()}
        className={styles.restButton}
      >
        RESET
      </Button>
    </section>
  );
};

export default Filter;
