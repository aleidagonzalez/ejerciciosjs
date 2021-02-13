/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  createPerson(names, surnames);
};

let names = ["aleida", "aron", "noa"];
let surnames = ["gonzalez", "fernandez", "alvarez"];

function createPerson(names, surnames) {
  let persons = [];
  // let persona={name:"aleida",surname:"gonzalez"}

  for (let i = 0; i < names.length; i++) {
    let person = {};
    let name = names[i];
    let surname = surnames[i];
    person["name"] = name;
    person["surname"] = surname;
    persons.push(person);
  }
  console.log(persons);
  return persons;
}
