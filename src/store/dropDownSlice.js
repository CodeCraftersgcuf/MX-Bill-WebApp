import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedType: "History",
  selectedAccount: 'Plaid Checking' ,
  isOpen: false,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown(state, action) {
      state.isOpen = !state.isOpen;
    },
    setSelectedType(state, action) {
      state.selectedType = action.payload;
      state.isOpen = false;
    },
    setSelectedAccount(state, action) {
      state.selectedAccount = action.payload;
      state.isOpen = false;
    },
    closeDropdown(state) {
      state.isOpen = false;
    },
  },
});

export const dropDownActions = dropdownSlice.actions;

export default dropdownSlice.reducer;
