import Image from "next/image";
import check from "../../assets/check.png";
import styles from "./success.module.css";

export function Success() {
  return (
    <div className={styles.container}>
      <Image src={check} alt={"Success"} />
      <div className={styles.title}>Thank you!</div>
      <div className={styles.subtitle}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </div>
    </div>
  );
}
