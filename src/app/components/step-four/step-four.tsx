import { StepForm } from "@/app/components/step-form/step-form";
import { useFormikContext } from "formik";
import {
  getAddonLabel,
  getAddonPricesMonthly,
  getAddonPriceYearly,
  getPlanLabel,
  getPlanPriceMonthly,
  getPlanPriceYearly,
  getPriceLabel,
  MultiStepForm,
} from "@/app/forms/multi-step-form";
import { useCurrentStepContext } from "@/app/context/currentStepProvider";
import { useMemo } from "react";
import styles from "./step-four.module.css";

export function StepFour() {
  const { setCurrentTab } = useCurrentStepContext();

  const { handleSubmit, values } = useFormikContext<MultiStepForm>();

  const planPrice = values.yearly
    ? getPlanPriceYearly(values.plan)
    : getPlanPriceMonthly(values.plan);
  const totalPriceAddons = useMemo(() => {
    let total = 0;
    values.addons.forEach((addon) => {
      total += values.yearly
        ? getAddonPriceYearly(addon)
        : getAddonPricesMonthly(addon);
    });
    return total;
  }, [values.addons, values.yearly]);
  return (
    <StepForm
      isLast
      title={"Finishing up"}
      subtitle={"Double-check everything looks OK before confirming."}
      back={() => {
        setCurrentTab("step-3");
      }}
      next={() => {
        handleSubmit();
      }}
    >
      <div className={styles.summaryContainer}>
        <div className={styles.planContainer}>
          <div>
            <div className={styles.planName}>
              {getPlanLabel(values.plan)} (
              {values.yearly ? "Yearly" : "Monthly"})
            </div>
            <div
              className={styles.planChange}
              onClick={() => setCurrentTab("step-2")}
            >
              Change
            </div>
          </div>
          <div className={styles.planPrice}>
            {getPriceLabel(planPrice, values.yearly)}
          </div>
        </div>
        {values.addons.length > 0 && <div className={styles.divider} />}
        <div>
          {values.addons.map((addon) => {
            return (
              <div key={addon} className={styles.addonItem}>
                <div className={styles.addonTitle}>{getAddonLabel(addon)}</div>
                <div className={styles.addonPrice}>
                  {getPriceLabel(
                    values.yearly
                      ? getAddonPriceYearly(addon)
                      : getAddonPricesMonthly(addon),
                    values.yearly,
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.totalTitle}>
          Total (per {values.yearly ? "year" : "month"})
        </div>
        <div className={styles.totalPrice}>
          {getPriceLabel(totalPriceAddons + planPrice, values.yearly)}
        </div>
      </div>
    </StepForm>
  );
}
