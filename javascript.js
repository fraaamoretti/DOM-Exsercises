function echoInput(){alert(document.getElementsByName('echoInput')[0].value);}
function piu(){
    document.getElementById('contatore').innerHTML = parseInt(document.getElementById('contatore').innerHTML) + 1;
}
function meno(){
    document.getElementById('contatore').innerHTML = parseInt(document.getElementById('contatore').innerHTML) - 1;
}

function scuro(){
    let element = document.getElementById('divColor');
    element.classList.remove("bg-light");
    element.classList.add('bg-dark');
    element.classList.remove("text-dark");
    element.classList.add('text-light');
    getElementById('chiaro').disabled = false;
    getElementById('scuro').disabled = true;
}

function chiaro(){
    let element = document.getElementById('divColor');
    element.classList.remove("bg-dark");
    element.classList.add('bg-light');
    element.classList.remove("text-light");
    element.classList.add('text-dark');
    getElementById('scuro').disabled = false;
    getElementById('chiaro').disabled = true;
}

function aggiungiRiga(){
    let testo = document.getElementsByName('newElementInput')[0].value;
    let tabella = document.getElementById('tabella');
    let elem = document.createElement('tr');
    let son = document.createElement('td');
    son.innerHTML = testo;
    elem.appendChild(son);
    tabella.appendChild(elem);
}