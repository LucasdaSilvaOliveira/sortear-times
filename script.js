const input_nomes = document.getElementById('nomes');
const input_times = document.getElementById('times');
const nomes_adicionados = document.getElementById('nomes-adicionados');
const times_adicionados = document.getElementById('times-adicionados');
const sorteio_feito = document.getElementById('sorteio-feito');
const img = document.getElementById('img');
const btn_sortear = document.getElementById('btn-sortear');

let nomeArray = [];
let timeArray = [];

function adicionar_nome() {
    let p = document.createElement('p');
    p.innerHTML = input_nomes.value;
    nomes_adicionados.appendChild(p);
    nomeArray.push(input_nomes.value);
    input_nomes.value = "";
    input_nomes.focus();
}

function adicionar_time() {
    let p = document.createElement('p');
    p.innerHTML = input_times.value;
    times_adicionados.appendChild(p);
    timeArray.push(input_times.value);
    input_times.value = "";
    input_times.focus();
}

function sortear() {

    if (nomeArray.length == 0) {
        window.alert('Não há nomes para sortear.');
        return;
    }

    img.classList.add('adicionar-rodar');
    btn_sortear.style.display = 'none';

    setTimeout(() => {
        btn_sortear.style.display = 'block';
        img.classList.remove('adicionar-rodar');
        let nomeAleatorio = nomeArray[Math.floor(Math.random() * nomeArray.length)];
        let timeAleatorio = timeArray[Math.floor(Math.random() * timeArray.length)];
        let p = document.createElement('p');
        p.innerHTML = `${nomeAleatorio} - ${timeAleatorio}`;
        sorteio_feito.appendChild(p);
        let indexNomeRemove = nomeArray.indexOf(nomeAleatorio);
        nomeArray.splice(indexNomeRemove, 1);
        let indexTimeRemove = timeArray.indexOf(timeAleatorio);
        timeArray.splice(indexTimeRemove, 1);
    }, 2000);
}