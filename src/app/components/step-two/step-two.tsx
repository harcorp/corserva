import { StepForm } from "@/app/components/step-form/step-form";
import styles from "./step-two.module.css";

import { useRouter } from "next/navigation";
import { PlanItem } from "@/app/components/form-components/plan-item/plan-item";
import GamepadIcon from "@mui/icons-material/Gamepad";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import React from "react";
import { useFormikContext } from "formik";
import {
  getPlanLabel,
  getPlanPriceMonthly,
  getPlanPriceYearly,
  getPriceLabel,
  MultiStepForm,
  PLANS,
} from "@/app/forms/multi-step-form";
import { AppSwitch } from "@/app/components/form-components/app-switch/app-switch";
import cx from "classnames";
import { useCurrentStepContext } from "@/app/context/currentStepProvider";

export async function generateStaticParams() {
  const posts = ["step-1", "step-2", "step-3", "step-4"];

  return posts.map((post) => ({
    slug: post,
  }));
}

export const StepTwo = () => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<MultiStepForm>();
  const { setCurrentTab } = useCurrentStepContext();
  return (
    <StepForm
      title={"Select your plan"}
      subtitle={"You have the option of monthly or yearly billing."}
      back={() => {
        setCurrentTab("step-1");
      }}
      next={() => {
        handleSubmit();
      }}
    >
      <div className={styles.itemsContainer}>
        <PlanItem
          iconColor={"orange"}
          Icon={GamepadIcon}
          title={getPlanLabel(PLANS.ARCADE)}
          subtitle={getPriceLabel(
            values.yearly
              ? getPlanPriceYearly(PLANS.ARCADE)
              : getPlanPriceMonthly(PLANS.ARCADE),
            values.yearly,
          )}
          isSelected={values.plan === "arcade"}
          onClick={async () => {
            await setFieldValue("plan", "arcade");
          }}
        />
        <PlanItem
          iconColor={"pink"}
          Icon={VideogameAssetIcon}
          title={getPlanLabel(PLANS.ADVANCE)}
          subtitle={getPriceLabel(
            values.yearly
              ? getPlanPriceYearly(PLANS.ADVANCE)
              : getPlanPriceMonthly(PLANS.ADVANCE),
            values.yearly,
          )}
          isSelected={values.plan === "advanced"}
          onClick={async () => {
            await setFieldValue("plan", "advanced");
          }}
        />
        <PlanItem
          iconColor={"purple"}
          Icon={SportsEsportsIcon}
          title={getPlanLabel(PLANS.PRO)}
          subtitle={getPriceLabel(
            values.yearly
              ? getPlanPriceYearly(PLANS.PRO)
              : getPlanPriceMonthly(PLANS.PRO),
            values.yearly,
          )}
          isSelected={values.plan === "pro"}
          onClick={async () => {
            await setFieldValue("plan", "pro");
          }}
        />
      </div>
      <div className={styles.frequencyContainer}>
        <div
          className={cx(styles.frequencyLabel, {
            [styles.selected]: !values.yearly,
          })}
        >
          Monthly
        </div>
        <AppSwitch name={"yearly"} />
        <div
          className={cx(styles.frequencyLabel, {
            [styles.selected]: values.yearly,
          })}
        >
          Yearly
        </div>
      </div>
    </StepForm>
  );
};
