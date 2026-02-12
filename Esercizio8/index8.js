async function fetchData() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/cards/");
    const data = await response.json();
    const book = data[0];

    const title = book.flavor;
    const cover = "https://ringsdb.com" + book.imagesrc;

    const h1 = document.querySelector(".my-title");
    const image = document.querySelector(".my-image");
    h1.innerText = title;
    image.setAttribute("src", cover);

    console.log(title, cover);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
