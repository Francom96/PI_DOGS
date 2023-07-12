import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/card";
import { getAllDogs } from "../../redux/actions/actions";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div className={style.divAll}>
      {dogs?.map(({ id, name, image, temperament, weightMin, weightMax }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            temperament={temperament}
            weightMin={weightMin}
            weightMax={weightMax}
          />
        );
      })}
    </div>
  );
};

export default Home;