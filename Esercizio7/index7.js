// Seleziono il bottone "Salva"
const myBtn = document.querySelector(".btn");
// Funzione che inserisce il nome nello span del titolo
function setUsername(username) {
  // Seleziono lo span
  const usernameEl = document.querySelector(".title-name");
  // Inserisco il testo dentro lo span
  usernameEl.innerText = username;
}
// Evento click sul bottone
myBtn.addEventListener("click", (event) => {
  // Prendo i valori degli input
  const firstname = document.querySelector(".firstname").value;
  const lastname = document.querySelector(".lastname").value;
  const email = document.querySelector(".email").value;
  // Creo un oggetto con tutti i dati del form
  const formData = {
    firstname,
    lastname,
    email,
  };
  // Salvo l'oggetto nel sessionStorage (convertito in stringa JSON)
  sessionStorage.setItem("formData", JSON.stringify(formData));
  // Aggiorno il titolo con il nome inserito
  setUsername(firstname);
});
// Recupero i dati salvati nel sessionStorage
const savedData = sessionStorage.getItem("formData");
// Se esistono dati salvati
if (savedData) {
  // Converto la stringa JSON in oggetto
  const parsedData = JSON.parse(savedData);
  // Ripristino i valori negli input
  document.querySelector(".firstname").value = parsedData.firstname;
  document.querySelector(".lastname").value = parsedData.lastname;
  document.querySelector(".email").value = parsedData.email;
  // Ripristino anche il nome nel titolo
  setUsername(parsedData.firstname);
}
