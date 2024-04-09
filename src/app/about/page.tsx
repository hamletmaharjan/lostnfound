import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.shape} />
      <p>About us</p>
    </div>
  );
}
