import styles from "./plan-item.module.css";
import cx from "classnames";
import { SvgIconComponent } from "@mui/icons-material";
export function PlanItem({
  iconColor,
  Icon,
  title,
  subtitle,
  onClick,
  isSelected,
}: {
  iconColor: "orange" | "pink" | "purple";
  Icon: SvgIconComponent;
  title: string;
  subtitle: string;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={cx(styles.container, {
        [styles.selected]: isSelected,
      })}
    >
      <div
        className={cx(styles.iconContainer, {
          [styles.orange]: iconColor === "orange",
          [styles.pink]: iconColor === "pink",
          [styles.purple]: iconColor === "purple",
        })}
      >
        <Icon className={styles.icon} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
