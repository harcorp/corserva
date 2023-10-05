import styles from "./app-button.module.css";
import cx from "classnames";

export function AppButton({
  title,
  variant = "filled",
  onClick,
}: {
  title: string;
  variant?: "filled" | "clear";
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cx(styles.container, {
        [styles.containerClear]: variant === "clear",
        [styles.containerFilled]: variant === "filled",
      })}
    >
      {title}
    </div>
  );
}
