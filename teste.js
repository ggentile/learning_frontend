function getTimeFromSecond(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone:'UTC'
    })
};


const relogio = document.querySelector('#display');
const iniciar = document.querySelector('.inicio');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; 
let timer;

function iniciaRelogio() {
    timer = setInterval(function (){
        segundos++;
        relogio.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0; 
    relogio.classList.remove('pausado');
});