import { createSlice } from "@reduxjs/toolkit";

export const personsSlice = createSlice({
  name: "persons",
  initialState: {
    person: [],
  },
  reducers: {
    add: (state, action) => {
      const { name, age } = action.payload;
      state.person.push({
        id: Math.round(Math.random() * 1000),
        name,
        age,
        img:
          "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Tongue&skinColor=Pale",
      });
    },
    remove: (state, action) => {
      state.person.filter((person) => person.id !== action.payload);
    },
  },
});

export const { add, remove } = personsSlice.actions;

export const selectPersons = (state) => state.persons.person;

export default personsSlice.reducer;
