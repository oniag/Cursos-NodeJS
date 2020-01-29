const { obterPessoas } = require('./service');

/*

const item = {
    nome: 'Niag',
    idade: 12
}

técnica destructuring do javascript
const {nome, idade} = item;
console.log(nome, idade)

*/

async function main() {
    try {
        const { results } = await obterPessoas('a');
        const familiaLars = results.filter(function (item) {
            // por padrão retorna um booleano
            // para informar se deve manter ou remover da lista
            // false > remove da lista
            // true > mantem
            // não encontrou -1
            // encontrou = posição no array
            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });
        const names = familiaLars.map((pessoa) => pessoa.name);
        console.log(names);
    }
    catch (error) {
        console.error('error', error);
    }
}

main();