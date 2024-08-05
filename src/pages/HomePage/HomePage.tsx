import styles from "./HomePage.module.css";
import { Navbar, About, Body, Header, Footer } from "../../components";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Header />
      <About />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
