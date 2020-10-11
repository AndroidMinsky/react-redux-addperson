const initialState = {
  person: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        person: state.person.concat({
          id: Math.random(),
          name: "Alex Samoletoff",
          age: Math.round(Math.random() * 100),
          img:
            "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Tongue&skinColor=Pale",
        }),
      };
    case "REMOVE":
      let updatedArray = state.person.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        person: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
