import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChooseCarStepFormValues } from "../components/ChooseCarStep";
import { OffPercentStepFormValues } from "../components/OffPercentStep";
import { PrevCompanyStepFormValues } from "../components/PrevCompanyStep";

export interface InsuranceSliceType {
  step: "ChooseCarStep" | "PrevCompanyStep" | "OffPercentStep";
  chooseCarStepData: ChooseCarStepFormValues | undefined;
  prevCompanyStepData: PrevCompanyStepFormValues | undefined;
  offPercentStepData: OffPercentStepFormValues | undefined;
}

export const initialState: InsuranceSliceType = {
  step: "ChooseCarStep",
  chooseCarStepData: undefined,
  prevCompanyStepData: undefined,
  offPercentStepData: undefined,
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState: initialState,
  reducers: {
    goToPrevCompanyStep(state, action: PayloadAction<ChooseCarStepFormValues>) {
      state.step = "PrevCompanyStep";
      state.chooseCarStepData = action.payload;
    },
    backToChooseCarStep(state) {
      state.step = "ChooseCarStep";
    },
    goToOffPercentStep(
      state,
      action: PayloadAction<PrevCompanyStepFormValues>
    ) {
      state.step = "OffPercentStep";
      state.prevCompanyStepData = action.payload;
    },
    backToPrevCompanyStep(state) {
      state.step = "PrevCompanyStep";
    },
    savePercentStep(state, action: PayloadAction<OffPercentStepFormValues>) {
      state.step = "OffPercentStep";
      state.offPercentStepData = action.payload;
    },
  },
});

export const {
  goToPrevCompanyStep,
  backToChooseCarStep,
  goToOffPercentStep,
  backToPrevCompanyStep,
  savePercentStep,
} = insuranceSlice.actions;
export default insuranceSlice.reducer;
