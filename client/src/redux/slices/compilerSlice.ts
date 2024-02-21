import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  html: String;
  css: String;
  javascript: String;
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  html: "",
  css: "",
  javascript: "",
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
