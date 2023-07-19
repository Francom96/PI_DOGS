import style from "./filter.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortByName,
  sortByWeight,
  getTemperaments,
  filterByTemps,
  filterBySource,
  getAllDogs,
} from "../../redux/actions/actions";

const Filter = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleOrderSelect = (event) => {
    if (event.target.value === "1" || event.target.value === "2")
      dispatch(sortByName(event));
    else dispatch(sortByWeight(event));
  };
  const handleTempSelect = (event) => {
    dispatch(filterByTemps(event));
  };
  const handleSourceSelect = (event) => {
    dispatch(filterBySource(event))
  };

  return (
    <div className={style.divAll}>
      <h2>Filter temp</h2>
      <select name="temps" id="1" onChange={handleTempSelect}>
        {temperaments?.map((temp) => (
          <option value={temp.name} key={temp.id}>
            {temp.name}
          </option>
        ))}
      </select>
      <h2>Order</h2>
      <select name="Order" id="2" onChange={handleOrderSelect}>
        <option value="1">Name A-Z</option>
        <option value="2">Name Z-A</option>
        <option value="3">Weight -/+</option>
        <option value="4">Weight +/-</option>
      </select>
      <h2>Sort by</h2>
      <select
        name="Sort by"
        id="3"
        onChange={handleSourceSelect}
      >
        <option value="ALL">All</option>
        <option value="DB">DB</option>
        <option value="API">API</option>
      </select>
    </div>
  );
};
export default Filter;
