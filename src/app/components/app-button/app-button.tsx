import styles from "./app-button.module.css";
import cx from "classnames";

export function AppButton({
  title,
  variant = "filled",
  onClick,
  color = "primary",
}: {
  title: string;
  variant?: "filled" | "clear";
  onClick?: () => void;
  color?: "primary" | "secondary";
}) {
  return (
    <div
      onClick={onClick}
      className={cx(styles.container, {
        [styles.containerClear]: variant === "clear",
        [styles.containerFilled]: variant === "filled",
        [styles.primary]: variant === "filled" && color === "primary",
        [styles.secondary]: variant === "filled" && color === "secondary",
      })}
    >
      {title}
    </div>
  );
}
