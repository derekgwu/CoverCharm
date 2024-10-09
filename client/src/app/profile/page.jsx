import Image from "next/image";
import styles from "../page.module.css";

export default function Profile() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>this is the profile</p>
      </div>
    </main>
  );
}