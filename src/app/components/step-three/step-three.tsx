import { StepForm } from "@/app/components/step-form/step-form";
import { AddonItem } from "@/app/components/form-components/addon-item/addon-item";
import { useFormikContext } from "formik";
import {
  ADDONS,
  getAddonLabel,
  getAddonPricesMonthly,
  getAddonPriceYearly,
  getPriceLabel,
  MultiStepForm,
} from "@/app/forms/multi-step-form";
import styles from "./step-three.module.css";
import { useCurrentStepContext } from "@/app/context/currentStepProvider";

export const StepThree = () => {
  const { setCurrentTab } = useCurrentStepContext();
  const { values, handleSubmit } = useFormikContext<MultiStepForm>();
  return (
    <StepForm
      title={"Pick add-ons"}
      subtitle={"Add-ons help enhance your gaming experience."}
      back={() => {
        setCurrentTab("step-2");
      }}
      next={() => {
        handleSubmit();
      }}
    >
      <div className={styles.addonsContainer}>
        <AddonItem
          value={ADDONS.ONLINE_SERVICE}
          name={"addons"}
          title={getAddonLabel(ADDONS.ONLINE_SERVICE)}
          subtitle={"Access to multiplayer games"}
          price={getPriceLabel(
            values.yearly
              ? getAddonPriceYearly(ADDONS.ONLINE_SERVICE)
              : getAddonPricesMonthly(ADDONS.ONLINE_SERVICE),
            values.yearly,
          )}
          isChecked={values.addons.some(
            (item) => item === ADDONS.ONLINE_SERVICE,
          )}
        />
        <AddonItem
          value={ADDONS.LARGE_STORAGE}
          name={"addons"}
          title={getAddonLabel(ADDONS.LARGE_STORAGE)}
          subtitle={"Extra 1TB of cloud save"}
          price={getPriceLabel(
            values.yearly
              ? getAddonPriceYearly(ADDONS.LARGE_STORAGE)
              : getAddonPricesMonthly(ADDONS.LARGE_STORAGE),
            values.yearly,
          )}
          isChecked={values.addons.some(
            (item) => item === ADDONS.LARGE_STORAGE,
          )}
        />
        <AddonItem
          value={ADDONS.CUSTOMIZABLE_PROFILE}
          name={"addons"}
          title={getAddonLabel(ADDONS.CUSTOMIZABLE_PROFILE)}
          subtitle={"Custom theme on your profile"}
          price={getPriceLabel(
            values.yearly
              ? getAddonPriceYearly(ADDONS.CUSTOMIZABLE_PROFILE)
              : getAddonPricesMonthly(ADDONS.CUSTOMIZABLE_PROFILE),
            values.yearly,
          )}
          isChecked={values.addons.some(
            (item) => item === ADDONS.CUSTOMIZABLE_PROFILE,
          )}
        />
      </div>
    </StepForm>
  );
};
