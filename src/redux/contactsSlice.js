// Слайс контактів

// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().

// Екшени слайса для використання в dispatch:

//     addContact - додавання нового контакту до властивості items
//     deleteContact - видалення контакту за id з властивості items

// Оголоси функції-селектори для використання в useSelector:

//     selectContacts - повертає список контактів з властивості items.

// З файла слайса експортуй редюсер, а також його екшени і селектори.

import { initialState } from "./initialState";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
