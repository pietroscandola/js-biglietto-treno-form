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


button.addEventListener('click', function() {
    const name = userName.value;
    console.log('Nome Passeggero: ', name);

    const kms = parseInt(km.value);
    console.log('Chilometri da percorrere: ', kms);

    const ages = parseInt(age.value);
    console.log('Età del passeggero: ', ages);

    if (name) {
        nome.innerHTML = `Nome Passeggero ${name}`;
    }


    let priceTicket = kms * 0.21;
    console.log('Prezzo del biglietto standard: ', priceTicket);

    if (ages < 18) {
        priceTicket = priceTicket - (priceTicket * 0.20)
        console.log('prezzo scontato per utenti che hanno età inferiore ai 18 anni è di: ', priceTicket.toFixed(2));
    } else if (ages > 65) {
        priceTicket = priceTicket - (priceTicket * 0.40)
        console.log('prezzo scontato per utenti che hanno età superiore ai 65 anni: ', priceTicket.toFixed(2));
    }

    let biglietto = document.getElementById('ticket');

    if (ages < 18 || ages > 65) {
        biglietto.innerText = 'Biglietto Scontato'
    } else {
        biglietto.innerText = 'Biglietto Standard'
    }

    let carrozza = document.getElementById('carrozza');

    for (let i = 0; i < 1; i++) {
        carrozza = Math.floor(Math.random() * 12) + 1;
        console.log('Numero Carrozza: ', carrozza);
    }

    carrozza.innerText = `Numero Carrozza: ${carrozza}`;






})