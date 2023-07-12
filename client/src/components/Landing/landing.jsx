import styles from "./landing.module.css";
import {Link} from "react-router-dom"
import github from '../../assets/github3.png'
import linkedin from '../../assets/linkedin3.png'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>

        <div className={styles.landingC2}>
        <h1 className={styles.title}>THE CRAZY WORLD OF DOGS</h1>
        </div>
        <Link to="/Home" className={styles.link}>
          <button className={styles.start}>
            START
          </button>
        </Link>
        <div className={styles.myInfo}>
          <p class="subtitle">BY FRANCOMUÑOZ</p>
          <a href="https://www.linkedin.com/in/franco-mu%C3%B1oz-395b711a5/" target="_blank" rel="noreferrer">
            <img className={styles.icons} src={linkedin} alt="L"/>
          </a>
          <a href="https://github.com/Francom96" target="_blank" rel="noreferrer">
            <img className={styles.icons} src={github} alt="L"/>
          </a>
        </div>
    </div>
  )
}

export default Landing;


     