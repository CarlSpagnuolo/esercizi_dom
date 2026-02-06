// Creo un oggetto person vuoto con le proprietà richieste
const person = {
  firstName: "",
  lastName: "",
  age: "",
};

// Recupero i valori dai campi input e li assegno all'oggetto
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;

//Assegno i valori all'oggetto
person.firstName = firstName;
person.lastName = lastName;
person.age = age;

// Recupero il form dalla pagina
const form = document.querySelector("form");

// Aggiungo al form l'attributo data-person contenente l'oggetto person in formato json.
form.setAttribute("data-person", JSON.stringify(person));
