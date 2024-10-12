import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const handleChangeFilter = (value) => dispatch(changeFilter(value));

  return (
    <>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.field}
        onChange={(e) => handleChangeFilter(e.target.value)}
        value={filterName}
        name="filter"
        type="text"
      />
    </>
  );
}
