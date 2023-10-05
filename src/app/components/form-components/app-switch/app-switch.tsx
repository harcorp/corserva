import styles from "./app-switch.module.css";
import cx from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Field } from "formik";
export function AppSwitch(
  params: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <label className={styles.switch}>
      <Field {...params} type="checkbox" />
      <span className={cx(styles.slider, styles.round)}></span>
    </label>
  );
}
