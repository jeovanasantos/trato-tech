import Footer from "components/Footer";
import styles from "./PaginaPadrao.module.scss";
import Navbar from "components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
