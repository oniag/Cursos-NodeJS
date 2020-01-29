const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '999999999',
                ddd: 51
            })
        }, 2000);
    });
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Travessa liberdade',
            num: 1
        })
    }, 2000);
}

// primeiro passo adicionar a palavra async -> automaticamente ela retornará uma promisse
main();
async function main() {
    try {
        console.time('medida-promise');

        const usuario = await obterUsuario();
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);
        const endereco = resultado[1];
        const telefone = resultado[2];
        console.log(`
            Usuario: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.num}
        `);
        console.timeEnd('medida-promise');
    }
    catch (error) {
        console.log('deu ruim', error);
    }
}