// importamos um módulo interno do nodejs

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando der algum problema -> reject (erro)
    // quando success -> resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('Deu ruim de verdade'));
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

const usuarioPromise = obterUsuario();
// para manipular o sucesso usando a função .then;
// paramanipular erros, usamos o catch;
// estamos trabalhando conceito de pipe;
// usuario -> telefone -> telefone;
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.num}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.log('deu ruim', error);
    });