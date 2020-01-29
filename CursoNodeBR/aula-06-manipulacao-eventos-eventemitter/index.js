// Tudo que acontece no nodejs é manipulado através de um evento.
// Usado para ações continuas
// Bastante usados em browsers (onClick)
// Trabalha sob o design pattern observer/pubsub

const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = ' usuario:click';

meuEmissor.on(nomeEvento, function (click) {
    console.log('o usuário clicou', click);
});

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no ok');

// let count = 0;
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok ' + (count++))
// }, 1000);

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`você digitou: ${value.toString().trim()}`)
});