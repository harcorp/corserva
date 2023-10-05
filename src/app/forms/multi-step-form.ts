import * as Yup from "yup";
export type MultiStepForm = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  yearly: boolean;
  addons: string[];
};

export const PLANS = {
  ARCADE: "arcade",
  ADVANCE: "advanced",
  PRO: "pro",
};

export const PLANS_LABELS = {
  ARCADE: "Arcade",
  ADVANCE: "Advanced",
  PRO: "Pro",
};

export const PLANS_PRICES_MONTHLY = {
  ARCADE: 9,
  ADVANCE: 12,
  PRO: 15,
};

export const PLANS_PRICES_YEARLY = {
  ARCADE: 90,
  ADVANCE: 120,
  PRO: 150,
};

export const getPlanLabel = (plan: string) => {
  const [PLAN_KEY] =
    Object.entries(PLANS).find((planItem) => planItem[1] === plan) || [];
  const labels = Object.entries(PLANS_LABELS);
  const [, LABEL] =
    labels.find((labelItem) => {
      return labelItem[0] === PLAN_KEY;
    }) || [];
  return LABEL || "";
};

export const getPlanPriceMonthly = (plan: string) => {
  const [PLAN_KEY] =
    Object.entries(PLANS).find((planItem) => planItem[1] === plan) || [];
  const prices = Object.entries(PLANS_PRICES_MONTHLY);
  const [, PRICE] =
    prices.find((item) => {
      return item[0] === PLAN_KEY;
    }) || [];
  return PRICE || 0;
};

export const getPlanPriceYearly = (plan: string) => {
  const [PLAN_KEY] =
    Object.entries(PLANS).find((planItem) => planItem[1] === plan) || [];
  const prices = Object.entries(PLANS_PRICES_YEARLY);
  const [, PRICE] =
    prices.find((item) => {
      return item[0] === PLAN_KEY;
    }) || [];
  return PRICE || 0;
};

export const ADDONS = {
  ONLINE_SERVICE: "online-service",
  LARGE_STORAGE: "large-storage",
  CUSTOMIZABLE_PROFILE: "customizable-profile",
};

export const ADDONS_LABELS = {
  ONLINE_SERVICE: "Online service",
  LARGE_STORAGE: "Larger storage",
  CUSTOMIZABLE_PROFILE: "Customizable profile",
};

export const ADDONS_PRICES_MONTHLY = {
  ONLINE_SERVICE: 1,
  LARGE_STORAGE: 2,
  CUSTOMIZABLE_PROFILE: 2,
};

export const ADDONS_PRICES_YEARLY = {
  ONLINE_SERVICE: 10,
  LARGE_STORAGE: 20,
  CUSTOMIZABLE_PROFILE: 20,
};

export const getAddonLabel = (addon: string) => {
  const [ADDON_KEY] =
    Object.entries(ADDONS).find((addonItem) => addonItem[1] === addon) || [];
  const labels = Object.entries(ADDONS_LABELS);
  const [, LABEL] =
    labels.find((labelItem) => {
      return labelItem[0] === ADDON_KEY;
    }) || [];
  return LABEL || "";
};

export const getAddonPricesMonthly = (addon: string) => {
  const [ADDON_KEY] =
    Object.entries(ADDONS).find((addonItem) => addonItem[1] === addon) || [];
  const prices = Object.entries(ADDONS_PRICES_MONTHLY);
  const [, PRICE] =
    prices.find((item) => {
      return item[0] === ADDON_KEY;
    }) || [];
  return PRICE || 0;
};

export const getAddonPriceYearly = (addon: string) => {
  const [ADDON_KEY] =
    Object.entries(ADDONS).find((addonItem) => addonItem[1] === addon) || [];
  const prices = Object.entries(ADDONS_PRICES_YEARLY);
  const [, PRICE] =
    prices.find((item) => {
      return item[0] === ADDON_KEY;
    }) || [];
  return PRICE || 0;
};

export const getPriceLabel = (price: number, isYearly: boolean) => {
  return isYearly ? `+$${price}/yr` : `+$${price}/mo`;
};

export const validationSchemas = {
  page1: Yup.object().shape({
    name: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("Please enter a valid email"),
  }),
  page2: undefined,
  page3: undefined,
  page4: undefined,
};

export const getValidationSchema = (currentTab: string) => {
  switch (currentTab) {
    case "step-1":
      return validationSchemas.page1;
    case "step-2":
      return validationSchemas.page2;
    case "step-3":
      return validationSchemas.page3;
    case "step-4":
      return validationSchemas.page4;
  }
};
