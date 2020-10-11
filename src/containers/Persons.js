import React, { useState } from "react";
import AddPerson from "../components/AddPerson";
import Person from "../components/Person";

import { connect } from "react-redux";

function Persons(props) {
  // const [person, setPerson] = useState([]);

  // const addPersonHandler = () => {
  //   setPerson([
  //     ...person,
  //     {
  //       name: "Alex Samoletoff",
  //       age: Math.round(Math.random() * 100),
  //       id: Math.random(),
  //       img:
  //         "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Tongue&skinColor=Pale",
  //     },
  //   ]);
  // };

  // const deletePersonHandler = (id) => {
  //   let updatedArray = person.filter((person) => person.id !== id);
  //   setPerson(updatedArray);
  // };

  let persons = props.person.map((person) => (
    <Person
      key={person.id}
      clicked={() => props.onRemovePerson(person.id)}
      name={person.name}
      age={person.age}
      img={person.img}
    />
  ));

  return (
    <div>
      <AddPerson clicked={props.onAddPerson} />
      {persons}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: "ADD" }),
    onRemovePerson: (id) => dispatch({ type: "REMOVE", personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
