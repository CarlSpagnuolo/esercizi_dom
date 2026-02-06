function addProduct() {
  // prendo l'input dalla pagina
  const input = document.querySelector("input");
  // prendo la lista (ul) dalla pagina
  const ul = document.querySelector("ul");
  // se l'input è vuoto, esco dalla funzione
  if (input.value === "") {
    return;
  }
  // creo un nuovo elemento li
  const li = document.createElement("li");
  // creo un input che sarà il checkbox
  const checkbox = document.createElement("input");
  // imposto il tipo dell'input come checkbox
  checkbox.type = "checkbox";
  // inserisco il testo scritto nell'input dentro il li
  li.innerText = input.value;
  // aggiungo il checkbox dentro il li
  li.appendChild(checkbox);
  // aggiungo il li alla lista ul
  ul.appendChild(li);
  // svuoto il campo input dopo aver aggiunto il task
  input.value = "";
}
