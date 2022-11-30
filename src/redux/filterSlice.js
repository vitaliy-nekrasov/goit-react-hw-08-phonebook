import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    updateFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

// Selectors

export const getFilterValue = state => state.filter.value;
