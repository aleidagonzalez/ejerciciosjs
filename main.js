// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";


let names = ["aleida", "aron", "noa"];
let surnames = ["gonzalez", "fernandez", "alvarez"];
let ages=["37", "15", "11"]
let adults = [];
let kids=[];

  createPerson(names, surnames,ages);


 
function createPerson(names, surnames,ages) {
  

  for (let i = 0; i < names.length; i++) {
   let person= {};
    let name = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    let surname = surnames[i].charAt(0).toUpperCase() + surnames[i].slice(1);
    let age=ages[i]
    person["name"] = name;
    person["surname"] = surname;
    person["age"]=age;
    // persons.push(person);
    if( age>=18){
        adults.push(person)
    }else{
        kids.push(person)
    }
                  
      }
  console.log("adults",adults,"kids: ",kids);
    }