// Hämta element
const root = document.getElementById("root");

// Visa "Välkommen" och bild i tre sekunder
const welcome = document.createElement("h1");
welcome.innerText = "Välkommen till Restaurang Semlan"

const image = document.createElement("img");
image.src = "img/semla.jpg"

// Appenda nya element
root.append(welcome, image)


// Kalla på veckodagsfunktionen efter tre sekunder
setInterval(() => {
  
  root.innerHTML = "";
  
  todaysFood();

}, 3000);


// Visa dagens mat (beroende på vilken veckodag)
function todaysFood() {

  // Variabler
  let d = new Date();
  let day = d.getDay();
  
  // Skriv ut för dagen
  switch (day) {
    case 1:
      day = "Måndag";
      food = "Idag serveras pannkakor"
      price = "99 kronor"
      break;
    case 2:
      day = "Tisdag";
      food = "Idag serveras köttbullar och potatismos"
      price = "99 kronor"
      break;
    case 3:
      day = "Onsdag";
      food = "Idag serveras sushi"
      price = "99 kronor"
      break;
    case 4:
      day = "Torsdag";
      food = "Idag serveras nötfärsbiffar och potatis"
      price = "99 kronor"
      break;
    case 5:
      day = "Fredag";
      food = "Idag serveras kycklingsallad"
      price = "99 kronor"
      break;
    case 6:
      day = "Lördag";
      food = "Det är stängt"
      break;
    case 0:
      day = "Söndag";
      food = "Det är stängt"
      break;
    default:
      day = "Okänd dag";

  }
  
  // Skapa element för att skriva ut dag, mat och pris
  let dayText = document.createElement("h2");
  dayText.innerText = day;
  root.append(dayText);
  
  let foodText = document.createElement("h3");
  foodText.innerText = food;
  root.append(foodText);

  let priceText = document.createElement("h4");
  priceText.innerText = price;
  root.append(priceText);

  // Knapp/p för att visa hela veckans meny
  let weekMenu = document.createElement("p");
  weekMenu.innerText = "Se hela veckans menu";
  root.append(weekMenu);

  weekMenu.addEventListener("click", showMenuWeek);
};

// Visa hela veckans meny
function showMenuWeek() {
  console.log("Klick på veckans meny");
}