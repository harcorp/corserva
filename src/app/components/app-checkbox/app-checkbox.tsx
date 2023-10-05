import styles from "./app-checkbox.module.css";
import { Field } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
export function AppCheckbox(
  params: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <label className={styles.container}>
      <Field {...params} type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
}
