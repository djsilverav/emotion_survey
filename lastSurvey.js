//import { saveAs } from 'file-saver'

// Section to save .txt file
const form = document.querySelector("form");
const log = document.querySelector("#log");
let answersRating3 = ["10 min",
                    "20 min",
                    "30 min",
                    "40 min",
                    "Más de 40 min"];
let answersRating4 = ["Si, luego del primer video.",
                    "Si, luego del segundo video.",
                    "Si, luego del tercer video",
                    "Si, luego de ver el video educativo",
                    "No, en ningun momento"];
function onSubmit(){
  var score =0;
  var numOfQuestions = 2;  
  var ans1 = document.forms['last2question']['rating3'].value;
  var ans2 = document.forms['last2question']['rating4'].value;
  let ansArray = [ans1, ans2];
  saveData(ansArray);
  //alert(ansArray);
}
 function saveData(ansArr){    
    answer = ansArr;
    
    ansString_1 = "Pregunta 1: " + " "+ answersRating3[answer[0]];
    ansString_2 = "Pregunta 2: " + " "+ answersRating4[answer[1]];
    ansStringArray = [ansString_1 + "\n" +
                      ansString_2 + "\n"]; 
    var blob = new Blob([ansStringArray], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "MI_NOMBRE_AQUI" + "last2questions.txt");
    //alert(ansString_1);
 }
