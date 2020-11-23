import React from "react";
import AddPerson from "../../components/AddPerson";
import Person from "../../components/Person";

import { useSelector, useDispatch } from "react-redux";
import { remove, selectPersons } from "./personsSlice";

function Persons() {
  const persons = useSelector(selectPersons);
  const dispatch = useDispatch();

  return (
    <div>
      <AddPerson />
      {persons.map((person) => (
        <Person
          key={person.id}
          onClick={() => dispatch(remove(person.id))}
          name={person.name}
          age={person.age}
          img={person.img}
        />
      ))}
    </div>
  );
}

export default Persons;
