import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserSliceType } from "./slices/userSlice";
import insuranceSlice, {
  InsuranceSliceType,
} from "@/src/modules/insurance/store/insuranceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    insurance: insuranceSlice,
  },
});

export interface RootState {
  user: UserSliceType;
  insurance: InsuranceSliceType;
}
