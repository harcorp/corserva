import styles from "./step-item.module.css";
import cx from "classnames";
export function StepItem({
  stepName,
  stepNumber,
  isCurrent,
}: {
  stepNumber: number;
  stepName: string;
  isCurrent?: boolean;
}) {
  return (
    <div
      className={cx(styles.container, {
        [styles.selected]: isCurrent,
      })}
    >
      <div className={styles.number}>{stepNumber}</div>
      <div>
        <div className={styles.stepNumber}>STEP {stepNumber}</div>
        <div className={styles.title}>{stepName}</div>
      </div>
    </div>
  );
}
