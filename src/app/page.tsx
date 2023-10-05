"use client";
import styles from "./page.module.css";
import { BaseLayout } from "@/app/layouts/base-layout";
import React, { useMemo, useState } from "react";
import { StepOne } from "@/app/components/step-one/step-one";
import { Formik, Form } from "formik";
import {
  getValidationSchema,
  MultiStepForm,
} from "@/app/forms/multi-step-form";
import { StepTwo } from "@/app/components/step-two/step-two";
import { StepThree } from "@/app/components/step-three/step-three";
import { StepFour } from "@/app/components/step-four/step-four";
import { CurrentStepContext } from "@/app/context/currentStepProvider";
import { Success } from "@/app/components/success/success";

const Home = (): React.JSX.Element => {
  const [currentTab, setCurrentTab] = useState("step-1");
  const [isSuccess, setIsSuccess] = useState(false);
  const initialValues: MultiStepForm = {
    name: "",
    phone: "",
    email: "",
    plan: "arcade",
    yearly: false,
    addons: [],
  };

  const CurrentStep = useMemo(() => {
    switch (currentTab) {
      case "step-2":
        return <StepTwo />;
      case "step-3":
        return <StepThree />;
      case "step-4":
        return <StepFour />;
      default:
        return <StepOne />;
    }
  }, [currentTab]);
  return (
    <main className={styles.main}>
      <BaseLayout currentTab={currentTab}>
        <CurrentStepContext.Provider
          value={{
            currentTab,
            setCurrentTab: (tab: string) => {
              setCurrentTab(tab);
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              if (currentTab !== "step-4") {
                if (currentTab === "step-1") {
                  setCurrentTab("step-2");
                }
                if (currentTab === "step-2") {
                  setCurrentTab("step-3");
                }
                if (currentTab === "step-3") {
                  setCurrentTab("step-4");
                }
              } else {
                setIsSuccess(true);
              }
            }}
            validationSchema={getValidationSchema(currentTab)}
          >
            {!isSuccess ? CurrentStep : <Success />}
          </Formik>
        </CurrentStepContext.Provider>
      </BaseLayout>
    </main>
  );
};

export default Home;
