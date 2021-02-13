/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let objectPersons = createPerson(names, surnames, ages);
  let allPersons = objectPersons.persons;
  let adults = objectPersons.adults;
  let kids = objectPersons.kids;

  createTable(allPersons, "allpersons");
  createTable(adults, "adults");
  createTable(kids, "kids");
  createPerson(names, surnames, ages);
};

let body = document.querySelector("#app");

function createTable(listPersons, title) {
  let myDiv = document.createElement("div");
  let titleTable = document.createElement("h3");
  titleTable.innerHTML = title;
  myDiv.appendChild(titleTable);

  let personsTable = document.createElement("table");
  let divTr = document.createElement("tr");
  let subTitleTable = ["name", "surname", "age"];

  for (let i = 0; i < subTitleTable.length; i++) {
    let divTh = document.createElement("th");
    divTh.innerHTML = subTitleTable[i];
    divTr.appendChild(divTh);
  }
  personsTable.appendChild(divTr);

  for (let i = 0; i < listPersons.length; i++) {
    let rowPerson = document.createElement("tr");
    let divTd = document.createElement("td");
    let divTdx = document.createElement("td");
    let divTdy = document.createElement("td");

    divTd.innerHTML = listPersons[i].name;
    divTdx.innerHTML = listPersons[i].surname;
    divTdy.innerHTML = listPersons[i].age;
    rowPerson.appendChild(divTd);
    rowPerson.appendChild(divTdx);
    rowPerson.appendChild(divTdy);
    personsTable.appendChild(rowPerson);
  }

  //surname

  myDiv.appendChild(personsTable);
  body.appendChild(myDiv);
}

let names = ["aleida", "aron", "noa"];
let surnames = ["gonzalez", "fernandez", "alvarez"];
let ages = ["37", "15", "11"];
let persons = [];
let adults = [];
let kids = [];

function createPerson(names, surnames, ages) {
  for (let i = 0; i < names.length; i++) {
    let person = {};
    let name = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    let surname = surnames[i].charAt(0).toUpperCase() + surnames[i].slice(1);
    let age = ages[i];

    person["name"] = name;
    person["surname"] = surname;
    person["age"] = age;
    persons.push(person);

    if (person.age >= 18) {
      adults.push(person);
    } else {
      kids.push(person);
    }
  }
  console.log(persons, adults, kids);
  let result = {
    persons: persons,
    adults: adults,
    kids: kids
  };
  return result;
}


