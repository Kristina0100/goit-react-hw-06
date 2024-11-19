import styles from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {

  const selectNameFilter = useSelector(state => state.filters.filters.name);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.search}>
        Filter contacts by name
        <input className={styles.input} value={selectNameFilter} type="text" onChange={(event) => {
            const action = changeFilter(event.target.value);
          dispatch(action);
        }} />
      </label>
    </div>
  )
}

export default SearchBox