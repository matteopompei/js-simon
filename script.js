// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let numbers = document.getElementById("numbers");
let numArr = [];
let num = 0;

while (numArr.length<5) {
  let doppione = false;
  num = Math.floor(Math.random() * 98) + 1;
  console.log(num);

  for (let i=0; i<numArr.length; i++) {
    if (num == numArr[i]) {
      doppione = true;
      console.log("Il numero " + num + " è un doppione, lo salto!");
    }
  } 

  if (doppione == false) {
    numArr.push(num);
  }
} 

numbers.innerHTML += numArr;

console.log(numArr);