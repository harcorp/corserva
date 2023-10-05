import styles from "./app-input.module.css";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Field } from "formik";

type AppInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  errorMessage?: string;
  placeholder: string;
};
export function AppInput({
  label,
  errorMessage,
  placeholder,
  ...rest
}: AppInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.label}>{label}</div>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </div>
      <Field {...rest} className={styles.input} placeholder={placeholder} />
    </div>
  );
}
