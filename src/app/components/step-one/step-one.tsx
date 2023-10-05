import { StepForm } from "@/app/components/step-form/step-form";
import { AppInput } from "@/app/components/form-components/input/app-input";
import { useFormikContext } from "formik";
import { MultiStepForm } from "@/app/forms/multi-step-form";
export function StepOne() {
  const { handleSubmit, errors } = useFormikContext<MultiStepForm>();
  return (
    <StepForm
      title={"Personal info"}
      subtitle={"Please provide your name, email address, and phone number."}
      next={() => {
        handleSubmit();
      }}
    >
      <AppInput
        id={"name"}
        name={"name"}
        label={"Name"}
        placeholder={"e.g. Stephen King"}
        errorMessage={errors.name}
      />
      <AppInput
        id={"email"}
        name={"email"}
        label={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
        errorMessage={errors.email}
      />
      <AppInput
        id={"phone"}
        name={"phone"}
        label={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        errorMessage={errors.phone}
      />
    </StepForm>
  );
}
