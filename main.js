let d = new Date();
let day = d.getDay();

console.log(day);

    switch (day) {
      case 1:
        dag = "Måndag";
        mat = "Idag serveras det pannkakor"
        break;
      case 2:
        dag = "Tisdag";
        mat = "Idag serveras det köttbullar och potatismos"
        break;
      case 3:
        dag = "Onsdag";
        mat = "Idag serveras det sushi"
        break;
      case 4:
        dag = "Torsdag";
        mat = "Idag serveras det nötfärsbiffar och potatis"
        break;
      case 5:
        dag = "Fredag";
        mat = "Idag serveras det kycklingsallad"
        break;
      case  6:
        dag = "Lördag";
        mat = "Det är stängt"
        break;
      case 0:
        dag = "Söndag";
        mat = "Det är stängt"
        break;
      default:
        dag = "Okänd dag";

    }
    document.getElementById("heading").innerHTML = dag;
    document.getElementById("paragraf").innerHTML = mat;