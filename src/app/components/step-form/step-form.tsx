import styles from "./step-form.module.css";
import { ReactNode } from "react";
import { AppButton } from "@/app/components/app-button/app-button";

export function StepForm({
  children,
  next,
  title,
  subtitle,
  back,
  isLast,
}: {
  children: ReactNode;
  next?: () => void;
  back?: () => void;
  title: string;
  subtitle: string;
  isLast?: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.formContainer}>{children}</div>
      <div className={styles.buttons}>
        {back && (
          <AppButton onClick={back} variant={"clear"} title={"Go Back"} />
        )}
        <div />
        {next && (
          <AppButton onClick={next} title={isLast ? "Confirm" : "Next Step"} />
        )}
      </div>
    </div>
  );
}
