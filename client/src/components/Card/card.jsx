import { NavLink } from "react-router-dom";
import style from "./card.module.css";



const Card = ({ id, name, image, temperament, weightMin, weightMax }) => {
  return (
    <div className={style.divAll}>
      <div>
        <h1 className={style.name}>{name}</h1>
        <img src={image} alt={name} className={style.img} />
        <hr />
        <p>{temperament}</p>
      </div>
      <br />
      <div>
        <h3>Weigth</h3>
        <p>
          {weightMin}-{weightMax} kg
        </p>
      </div>
      <NavLink to={`/detail/${id}`} className={style.navLink}>
        <p className={style.moreInfoButton}>MORE OF ME</p>
      </NavLink>
    </div>
  );
};

export default Card;
