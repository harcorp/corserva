import styles from "./addon-item.module.css";
import { AppCheckbox } from "@/app/components/app-checkbox/app-checkbox";
import cx from "classnames";
export function AddonItem({
  value,
  title,
  subtitle,
  price,
  isChecked,
  name,
}: {
  value: string;
  title: string;
  subtitle: string;
  price: string;
  isChecked: boolean;
  name: string;
}) {
  return (
    <div
      className={cx(styles.container, {
        [styles.selected]: isChecked,
      })}
    >
      <AppCheckbox name={name} value={value} />
      <div className={styles.titles}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.price}>{price}</div>
    </div>
  );
}
