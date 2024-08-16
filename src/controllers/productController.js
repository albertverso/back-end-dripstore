const { types } = require('pg');
const {Product, ProductImage, ProductOption} = require('../models/product')

// Adicionar uma novo produto
const CreateProduct = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        const category_ids = await result.addCategories(req.body.category_ids);
        
        // Preparar as imagens e criar registros na tabela ProductImage
        const images = await ProductImage.bulkCreate(
            req.body.images.map((image) => ({
                product_id: result.id,
                path: image.content,
                enabled: image.enabled
            }))
        );
        
        const options = await ProductOption.bulkCreate(
            req.body.options.map((option)=> ({
                product_id: result.id,
                title: option.title,
                shape: option.shape,
                radius: option.radius,
                type: option.type,
                value: option.value
            }))
        );

        const responseBody = {
            enabled: result.enabled,
            name: result.name,
            slug: result.slug,
            stock: result.stock,
            description: result.description,
            price: result.price,
            price_with_discount: result.price_with_discount,
            category_ids: category_ids,
            images: images.map(image => ({
                enabled: image.enabled,
                content: image.path
            })),
            options: options.map(option => ({
                title: option.title,
                shape: option.shape,
                radius: option.radius,
                type: option.type,
                value: option.value.replace(/[{}]/g, '').split(',')
            }))
        };

        res.status(201).send(responseBody);
    }catch (error){
        res.status(500).json({ error: 'Erro ao criar o produto.' });
    } 
  };
  
// Buscar todos os produtos
const SearchProductAll = async (req, res) => {
    try {
        
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 30);
        const offset = (page - 1) * limit;
        const fields = req.query.fields
        // Configurar a seleção de campos
        let attributes = fields ? fields.split(',') : [];
        const includeImages = !fields ||attributes.includes('images');
        const includeOptions = !fields || attributes.includes('options');

        // Remover 'images' e 'options' dos campos, já que eles precisam de manipulação especial
        if (attributes) {
            attributes = attributes.filter(field => field !== 'images' && field !== 'options');
        }
        
        const {rows:products, count:total} = await Product.findAndCountAll({
            offset, limit, attributes: attributes.length > 0 ? attributes : undefined,
        })

        const data = await Promise.all(products.map(async product => {
            let productData = product.toJSON();

            // Incluir imagens se solicitado
            if (includeImages) {
                const images = await ProductImage.findAll({
                    where: { product_id: product.id }
                });
                productData.images = images.map(image => image.toJSON());
            }

            // Incluir opções se solicitado
            if (includeOptions) {
                const options = await ProductOption.findAll({
                    where: { product_id: product.id }
                });
                productData.options = options.map(option => ({
                    ...option.toJSON(),
                    value: option.value.replace(/[{}]/g, '').split(',')
                }));
            }

            return productData;
        }));

        res.status(201).send({data, total, page, limit})
    } catch(error) {
        res.status(500).json({ error: 'Erro ao visualizar produtos.' });
    }
};

// Buscar um produtos por ID
const SearchProductId =  async (req, res) => {
    Product.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
};

// Atualizar uma produtos por ID
const UpdateProduct =  async (req, res) => {
    Product.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
};

// Deletar uma produtos por ID
const DeleteProduct =  async (req, res) => {
    Product.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
};

module.exports = {
    CreateProduct, SearchProductAll, SearchProductId, UpdateProduct, DeleteProduct
}