import { createContext, useContext } from "react";

export const CurrentStepContext = createContext({
  currentTab: "",
  setCurrentTab: (tab: string) => {},
});

export function useCurrentStepContext() {
  return useContext(CurrentStepContext);
}
