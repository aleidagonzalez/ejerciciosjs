/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let names = ["aleida", "aron", "noa"];
let surnames = ["gonzalez", "fernandez", "alvarez"];

window.onload = function() {
  createPerson(names, surnames);
};

function createPerson(names, surnames) {
  let persons = [];

  for (let i = 0; i < names.length; i++) {
    let person = {};
    let name = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    let surname = surnames[i].charAt(0).toUpperCase() + surnames[i].slice(1);

    person["name"] = name;
    person["surname"] = surname;
    persons.push(person);
  }
  console.log(persons);
  return persons;}