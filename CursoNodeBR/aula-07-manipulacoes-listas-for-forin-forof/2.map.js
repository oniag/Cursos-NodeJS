const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let i = 0; i <= this.length - 1; i++) {
        const resultado = callback(this[i], i);
        novoArrayMapeado.push(resultado);
        return novoArrayMapeado;
    }
}

async function main() {
    try {
        const result = await service.obterPessoas('a');
        //foreach

        //const names = [];
        // result.results.forEach(function (item) {
        //     names.push(item.name);
        // });

        //map

        // const names = result.results.map(function (pessoa) {
        //     return pessoa.name;
        // });

        //map mais bonito
        // const names = result.results.map(pessoa => pessoa.name);

        // funcion meuMap
        const names = result.results.meuMap(function (pessoa, i) {
            return pessoa.name;
        });

        console.log('names', names);
    }
    catch (error) {
        console.error('error ', error)
    }
}

main();