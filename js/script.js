/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const userName = document.querySelector('#name');

const km = document.querySelector('#km');

const age = document.querySelector('#age');

const button = document.querySelector('#start');

const nome = document.querySelector('#nome');
const chilometri = document.querySelector('#chilometri');
const età = document.querySelector('#età');

button.addEventListener('click', function() {
    const name = userName.value;
    console.log('Nome Passeggero: ', name);

    const kms = km.value;
    console.log('Chilometri da percorrere: ', kms);

    const ages = age.value;
    console.log('Età del passeggero: ', ages);

    if (name) {
        nome.innerHTML = `Nome Passeggero ${name}`;
    }

    if (kms) {
        chilometri.innerHTML = `Chilometri da percorrere ${kms}`;
    }

    if (ages) {
        età.innerHTML = `Età del passeggero ${ages}`;
    }
})