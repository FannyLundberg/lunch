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
setTimeout(() => {
  
  root.innerHTML = "";
  
  todaysFood();

}, 3000);


// Visa dagens mat (beroende på vilken veckodag)
function todaysFood() {

  // Variabler
  let d = new Date();
  let day = d.getDay();

  let mealsArray = [
    {
      day: "Måndag",
      food: "Idag serveras pannkakor",
    },
    {
      day: "Tisdag",
      food: "Idag serveras köttbullar och potatismos",
    },
    {
      day: "Onsdag",
      food: "Idag serveras sushi",
    },
    {
      day: "Torsdag",
      food: "Idag serveras nötfärsbiffar och potatis",
    },
    {
      day: "Fredag",
      food: "Idag serveras kycklingsallad",
    },

  ]
  
  // Skriv ut för dagen
  switch (day) {
    case 1:
      day = mealsArray[1].day
      food = mealsArray[1].food
      break;
    case 2:
      day = mealsArray[2].day
      food = mealsArray[2].food
      break;
    case 3:
      day = mealsArray[3].day
      food = mealsArray[3].food
      break;
    case 4:
      day = mealsArray[4].day
      food = mealsArray[4].food
      break;
    case 5:
      day = mealsArray[5].day
      food = mealsArray[5].food
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

  // Knapp/p för att visa hela veckans meny
  let weekMenu = document.createElement("p");
  weekMenu.innerText = "Se hela veckans meny";
  root.append(weekMenu);


  // När man klickar för att se hela menyn
  weekMenu.addEventListener("click", () => {
    console.log("Klick på veckans meny");

    let weekMenuWrapper = document.createElement("div");
    root.append(weekMenuWrapper);

    let weekMenu = document.createElement("p");
    weekMenu.innerText = mealsArray[0].day
    root.append(weekMenu);
  });
};