function contaElementi () { //Es1
    console.log("Numero di div: " + document.getElementsByTagName('div').length);
    let a = document.getElementById('accordionEsercizi');
    console.log("Numero di div nell'accordion accordionEsercizi: " + a.getElementsByTagName('div').length);
    a = document.getElementsByClassName('container');
    console.log("Numero di tag con classe contaienr: " + a.length);
    let count = 0;
    for(let son of a){
        if(son.childNodes.length > 10) { cont++; }
    }   console.log("Numero di tag cpn classe container con più di 10 figli: " + count);
}
function echoInput(){alert(document.getElementsByName('echoInput')[0].value);} //Es2
function piu(){ //Es3
    document.getElementById('contatore').innerHTML = parseInt(document.getElementById('contatore').innerHTML) + 1;
}
function meno(){ //Es3
    document.getElementById('contatore').innerHTML = parseInt(document.getElementById('contatore').innerHTML) - 1;
}
let ch = 0; //Es4
let first;
document.addEventListener('load', function () {
    first = document.getElementById('testoaaa').innerHTML;
});
function evidenzia() { //Es4
    
    let testo = document.getElementById('testoaaa');

    if(ch == 0){ first = testo.innerHTML; ch = 1; }

    let s = '<span id="span">';
    let parole = testo.innerHTML.split(' ');
    for(let parola of parole){
        if(parola.length > 7) { s += ('<p class="evid">'+parola+'</p>'+'<p style="display:inline;"> </p>'); }
        else { s += parola + " "; }
    }
    s += '</span>';
    testo.innerHTML = s;  
    document.getElementById('ev').setAttribute('onclick','');
    document.getElementById('noev').setAttribute('onclick','rimuoviEvidenziatore()');
}
function rimuoviEvidenziatore() { //Es4
    document.getElementById('testoaaa').innerHTML = first;
    document.getElementById('ev').setAttribute('onclick','evidenzia()');
    document.getElementById('noev').setAttribute('onclick','');
}
function scuro(){ //Es5
    let element = document.getElementById('divColor');
    element.classList.remove("bg-light");
    element.classList.add('bg-dark');
    element.classList.remove("text-dark");
    element.classList.add('text-light');
    document.getElementById('scuro').classList.toggle('d-none');
    document.getElementById('chiaro').classList.toggle('d-none');
}
function chiaro(){ //Es5
    let element = document.getElementById('divColor');
    element.classList.remove("bg-dark");
    element.classList.add('bg-light');
    element.classList.remove("text-light");
    element.classList.add('text-dark');
    document.getElementById('scuro').classList.toggle('d-none');
    document.getElementById('chiaro').classList.toggle('d-none');
}
function aggiungiRiga(){ //Es6
    let testo = document.getElementsByName('newElementInput')[0].value;
    let tabella = document.getElementById('tabella');
    let elem = document.createElement('tr');
    let son = document.createElement('td');
    son.innerHTML = testo;
    elem.appendChild(son);
    tabella.appendChild(elem);
}