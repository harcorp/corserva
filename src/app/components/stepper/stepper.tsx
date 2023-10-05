import styles from "./stepper.module.css";
import { StepItem } from "@/app/components/step-item/step-item";

export function Stepper({ currentTab }: { currentTab: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerItems}>
        <StepItem
          stepName={"YOUR INFO"}
          stepNumber={1}
          isCurrent={currentTab === "step-1"}
        />
        <StepItem
          stepName={"SELECT PLAN"}
          stepNumber={2}
          isCurrent={currentTab === "step-2"}
        />
        <StepItem
          stepName={"ADD-ONS"}
          stepNumber={3}
          isCurrent={currentTab === "step-3"}
        />
        <StepItem
          stepName={"SUMMARY"}
          stepNumber={4}
          isCurrent={currentTab === "step-4"}
        />
      </div>
    </div>
  );
}
