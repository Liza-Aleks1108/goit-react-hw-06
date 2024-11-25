// Слайс фільтра

// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().

// Екшени слайса для використання в dispatch:

//     changeFilter - зміна значення фільтра в властивості name

// Оголоси функції-селектори для використання в useSelector:

//     selectNameFilter - повертає значення фільтра з властивості name.

// З файла слайса експортуй редюсер, а також його екшени і селектори.

import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: initialState.filters,
  reducers: {
    filterContact(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContact } = slice.actions;

export default slice.reducer;

export const selectNameFilter = (state) => state.filters.name;
