import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { filterActionTypes } from "../../store/actionTypes";
import { getStoryList } from "../../store/actionCreators";

interface language {
  id: number;
  name: string;
  selected: boolean;
}

interface IProps {
  title?: string;

  data?: language[];
  description: string;
}

const Item = (data: any) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <FormControlLabel
        onChange={(e, checked: boolean) => {
          dispatch({
            type: filterActionTypes.CHANGE_SELECT_LANGUAGE,
            payload: {
              checked: checked,
              id: data.data.id,
            },
          });
          dispatch(getStoryList(data.data.prefix));
        }}
        className={styles.checkbox}
        control={<Checkbox checked={data.data.selected} />}
        label={data.data.name}
      />
    </div>
  );
};

const DropDownContent = ({ description, data }: IProps) => {
  return (
    <div className={styles.dropdownContent}>
      <p>{description} :</p>
      <div className={styles.itemsContainer}>
        {data &&
          data.map((item: language) => {
            return <Item key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
};

export const Select = ({ title, description, data }: IProps) => {
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
      {isOpen && <DropDownContent data={data} description={description} />}
    </div>
  );
};
