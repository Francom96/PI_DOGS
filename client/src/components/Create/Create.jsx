import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog , getTemperaments} from "../../redux/actions/actions";
import style from "./create.module.css";
import validateText from "../../utils/validation"


const Create = () => {
  const dispatch = useDispatch();
  const tempsFromState = useSelector((state) => state.temperaments);
  
  const [form, setForm] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleForm = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
    setErrors(validateText({
      ...form,
      [property]: value
    }));
  };


  const handleTemperament = (event) => {
    let nextTemp = event.target.value;
    if (form.temperaments.length < 4) {
      if (!form.temperaments.includes(nextTemp)) {
        setForm({
          ...form,
          temperaments: [...form.temperaments, event.target.value],
        });
      }
    }else{alert("No podes seleccionar mas de 4")}
    };

  const handleClick = (event) => {
    console.log(form);
    event.preventDefault();
    dispatch(postDog(form));
  };

  const handleClickReset = (event) => {
    event.preventDefault();
    setForm({
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_span: "",
      temperaments: [],
    });

  };
 
 


  return (
    <div className={style.divAll}>
    <div className={style.divContainer}>      
      <div>
        <h1>CREATE YOUR DOG!</h1>
       
      </div>
      <div>
        <form action="" type="submit" className={style.form}>
          <div className={style.inputDiv}>
            <label htmlFor="" name="name">
              Breed name
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="name"
              value={form.name}
            />
            <br />
             <span className={style.error}>{errors.name}</span>
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="" name="heightMin">
              Min height
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="heightMin"
              value={form.heightMin}
            />
            <br />
             <span className={style.error}>{errors.heightMin}</span>
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="" name="heightMax">
              Max height
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="heightMax"
              min="1"
              max="5"
              value={form.heightMax}
            />
            <br />
             <span className={style.error}>{errors.heightMax}</span>
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="" name="weightMin">
              Min weight
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="weightMin"
              value={form.weightMin}
            />
            <br />
             <span className={style.error}>{errors.weightMin}</span>
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="" name="weightMax">
              Max weight
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="weightMax"
              value={form.weightMax}
            />
               <br />
             <span className={style.error}>{errors.weightMax}</span>
          </div>
          <div className={style.inputDiv}>
            <label htmlFor="" name="life_span">
              Life span
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="life_span"
              value={form.life_span}
            />
               <br />
             <span className={style.error}>{errors.life_span}</span>
          </div>
          <div className={style.inputDiv}>
          <label htmlFor="" name="temperaments">
              Temperaments
            </label>
            <select
                id="temperaments"
                name="temperaments"
                value={form.temperaments}
                onChange={handleTemperament}
              >
                <option >Select up to four</option>
                {tempsFromState?.map((temp) => (
                  <option value={temp.name} key={temp.id}>
                    {temp.name}
                  </option>
                ))}
              </select>
          </div>
          <div className={style.inputDiv}>
            <button className={style.buttonCreate} type="submit" onClick={handleClick}>
              CREATE
            </button>
            <button
                type="submit"
                onClick={handleClickReset}
                className={style.buttonCreate}
              >
                RESET
              </button>
          </div>
        </form>
      </div>
      </div>
</div>
  );
};

export default Create;