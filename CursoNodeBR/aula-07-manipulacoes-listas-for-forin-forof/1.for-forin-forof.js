const service = require('./service');

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names = [];

        //for
        console.time('for');
        for (let i = 0; i <= result.results.lenght - 1; i++) {
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('for');

        //forin
        console.time('forin');
        for (let i in result.results) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('forin');

        //forof
        console.time('forof');
        for (pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('forof');
        console.log(`nomes`, names)
    }
    catch (error) {
        console.log('error interno ', error)
    }
}

main();