const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    // lista todos os registros
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    //paginação dos dados
    async paginate(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    // retorna um único produto
    async show(req, res) {
        const product = await product.findById(req.params.id);
        return res.json(product);
    },

    // cria um novo produto;
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // atualiza os dados do produto;
    async update(req, res) {
        // new retorne o produto atualizado;
        const product = await findByIdUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    // deleta produto
    async destroy(req, res) {
        const product = await findByAndRemove(req.params.id);
        return res.send();
    }
}