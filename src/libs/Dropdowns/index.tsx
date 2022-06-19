import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import styles from "./style.module.scss";

interface IProps {
  title?: string;
  description: string;
}

const Item = () => {
  return (
    <div className={styles.item}>
      <FormControlLabel
        className={styles.checkbox}
        control={<Checkbox defaultChecked />}
        label="Select / Unselect All"
      />
      <FormControlLabel
        className={styles.checkbox}
        control={<Checkbox defaultChecked />}
        label="English"
      />
      <FormControlLabel
        className={styles.checkbox}
        control={<Checkbox defaultChecked />}
        label="German"
      />
      <FormControlLabel
        className={styles.checkbox}
        control={<Checkbox defaultChecked />}
        label="Chinese"
      />
      <FormControlLabel
        className={styles.checkbox}
        control={<Checkbox checked={false} />}
        label="Italian"
      />
    </div>
  );
};

const DropDownContent = ({ description }: IProps) => {
  return (
    <div className={styles.dropdownContent}>
      <p>{description} :</p>
      <div className={styles.itemsContainer}>
        <Item />
      </div>
    </div>
  );
};

export const Select = ({ title, description }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownTitles}>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <div className={styles.splitButton}>
        <button onMouseDown={() => setIsOpen(!isOpen)}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      {isOpen && <DropDownContent description={description} />}
    </div>
  );
};
