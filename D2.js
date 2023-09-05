/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 10
if (a>b){
  console.log (a + " è maggiore di " + b)
}
else{
  console.log (b + " è maggiore di " + a )
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (a===5){
  console.log(a +" è uguale a 5")
}
else{
  console.log(a + "not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (b % 5 === 0){
  console.log ("divisibile per 5")
}
else {
  console.log ("non è divisibile")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = a-b
if(c===8){
console.log ("Il tuo risultato è pari a 8")
}
else {
  console.log ("Il tuo risultato non è pari a 8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart 
if (totalShoppingCart >= 50){
  console.log("Costo spedizio = 0.00€")
}
else{
  console.log("Costo spedizione = 7.00€")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if (((totalShoppingCart / 100) *20) >=50){
  console.log ("Costo spedizione = 0.00€")
}
else{
  console.log ("Costo spedizione = 7.00€")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
a= 7
b= 9
c =4
if (a>b && b>c ){
  console.log(a + " " + b +  " " + c)
}
else if (a>c && c>b){
  console.log(a + " " + c +" " + b)
}
else if (b>a && a>c){
  console.log(b + " " + a +" " + c)
}
else if (b>c && c>a){
  console.log(b + " " + c +" " + a)
}
else if (c>a && a>b){
  console.log(c + " " + a +" " + b)
}
else if (c>b & b>a){
  console.log(c + " " + b +" " + a)
}
else{
  console.log("Assicurati di scrivere numeri diversi tra loro")
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Il valore di a è" + typeof a)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (b % 2 === 0){
  console.log ("Il tuo numero è pari")
}
else {
  console.log ("Il tuo numero è dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val > 10) {
  console.log(val + " è maggiore di 10")
}
else{
  console.log(val + " è minore o uguale a 10")
}
    
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"

console.log (me.city)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log (me.lastName)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
console.log (me.skills[2])
console.log (me.skills[0])
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = []
numeri.push("1")
numeri.push("2")
numeri.push("3")
numeri.push("4")
numeri.push("5")
numeri.push("6")
numeri.push("7")
numeri.push("8")
numeri.push("9")
numeri.push("10")


console.log(numeri)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[-1] = 100
console.log (numeri[-1])