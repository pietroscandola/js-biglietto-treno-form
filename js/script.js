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

const biglietto = document.querySelector('#ticket');

const carrozza = document.querySelector('#carrozza');

const codice = document.querySelector('#codice-CP')

const priceTicket = document.querySelector('#price-ticket')


button.addEventListener('click', function() {
    const name = userName.value;
    console.log('Nome Passeggero: ', name);

    const kms = parseInt(km.value);
    console.log('Chilometri da percorrere: ', kms);

    const ages = parseInt(age.value);
    console.log('Età del passeggero: ', ages);

    if (name) {
        nome.innerHTML = `<strong>Nome Passeggero</strong>: <div>${name}</div>`;
    }

    // Prezzo Biglietto
    const price = kms * 0.21;
    let prezzo = price;
    console.log('Prezzo del biglietto standard: ', price);

    if (ages < 18) {
        prezzo = price - (price * 0.20)
        console.log('prezzo scontato per utenti che hanno età inferiore ai 18 anni è di: ', prezzo.toFixed(2));
    } else if (ages > 65) {
        prezzo = price - (price * 0.40)
        console.log('prezzo scontato per utenti che hanno età superiore ai 65 anni: ', prezzo.toFixed(2));
    }

    priceTicket.innerHTML = `<strong>Costo Biglietto</strong>: <div>${prezzo.toFixed(2)} €</div>`;


    // Calcolo se il biglietto è scontato o meno

    if (ages < 18 || ages > 65) {
        biglietto.innerHTML = '<strong>Offerta</strong> <div>Biglietto Scontato</div>'
    } else {
        biglietto.innerHTML = '<strong>Offerta</strong> <div>Biglietto Standard</div>'
    }


    // Calcolo il numero della carrozza

    const train = Math.floor(Math.random() * 12) + 1;
    console.log('Numero Carrozza: ', train);
    carrozza.innerHTML = `<strong>Numero Carrozza</strong> <div>${train}</div>`;


    // Calcolo il Codice-CP

    const cp = Math.floor(Math.random() * 99999) + 1;
    console.log('Codice CP: ', cp);
    codice.innerHTML = `<strong>Codice CP</strong> <div>${cp}</div>`;

})


const remove = document.getElementById('close')

remove.addEventListener('click', function() {
    userName.value = '';
    km.value = '';
    age.value = '';

    nome.innerHTML = '';
    priceTicket.innerHTML = '';
    carrozza.innerHTML = '';
    codice.innerHTML = '';
    biglietto.innerHTML = '';
})