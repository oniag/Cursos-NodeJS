//  - Obter um usuário;
//  - Obter o número de telefone de um usuário a partir de um id;
//  - obter o endereço do usuário pelo id;


function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '999999999',
            ddd: 51
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Travessa liberdade',
            num: 1
        })
    }, 2000);
}

function resolverUsuario(err, usuario) {
    console.log('usuario', usuario);
}


obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log('Ocorreu um erro usuário', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error) {
            console.log('Ocorreu um erro no telefone', error1);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error) {
                console.log('Ocorreu um erro no endereço', error2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.num},
                Telefone: (${telefone.ddd}), ${telefone.telefone}
            `);
        });
    });

});
