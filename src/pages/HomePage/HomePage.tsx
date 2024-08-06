import styles from "./HomePage.module.css";
import { Header } from "../../components";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default HomePage;
