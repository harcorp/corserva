import React from "react";
import styles from "./base-layout.module.css";
import { Stepper } from "@/app/components/stepper/stepper";

export function BaseLayout({
  children,
  currentTab,
}: {
  children: React.ReactNode;
  currentTab: string;
}) {
  return (
    <div className={styles.container}>
      <Stepper currentTab={currentTab} />
      {children}
    </div>
  );
}
