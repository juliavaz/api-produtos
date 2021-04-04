import * as Yup from 'yup';
import Product from '../models/Product.js';

class ProductController {
    async list(req, res){
        await Product.find({}).then((produtos) => {
            return res.json({
                error: false,
                produtos: produtos
            });
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                code: 103,
                message: "error: Não foi possível executar a solicitação"
            })
        })
    };

    async listOne(req, res){
        await Product.findOne({ _id: req.params.id}, '_id nome marca categoria createAt updateAt')
            .then((produto) => {
                return res.json({
                    error: false,
                    produto: produto
                });               
            }).catch((error) => {
            return res.status(400).json({
                error: true,
                code: 104,
                message: "error: Não foi possível executar a solicitação"
            })
        })
    };

    async create (req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string()
                .required()
                .max(50),
            marca: Yup.string()                
                .required()
                .max(50),
            categoria: Yup.string()
                .required()
                .max(50)
        });

        if( !(await schema.isValid(req.body))){
            return res.status(401).json({
                error: true,
                code: 100,
                message: "error: Esta marca já está cadastrada"
            })
        };

        const produto = await Product.create(req.body, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 100,
                message: "error: Produto não foi cadastrado com sucesso"
            })

            res.status(200).json({
                error: false,
                message: "Produto cadastrado com sucesso",
                produto: produto
            })           
        });        
    };

    async update(req, res) {
        const produto = req.body;
        Product.updateOne({_id: req.params.id}, produto).then(() => {
            return res.json({
                error: false,
                message: "Produto editado com sucesso!"
            });
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                code: 107,
                message: "Erro: Produto não foi editado com sucesso!"
            })
        });
    };

    async deleteOne (req, res) {
        const produtoExiste = await Product.findOne({ _id: req.params.id}, (error) => {
            if (error) return res.status(400).json({
                error: true,
                code: 105,
                message: "Erro: Produto não encontrado"
            });
        })
        
        const produto = await Product.deleteOne({ _id: req.params.id }, (error) => {
            if (error) return res.status(400).json({
                error: true,
                code: 106,
                message: "Erro: Produto não foi deletado com sucesso"
            });
        });

        return res.status(200).json({
            error: false,
            message: "Produto deletado com sucesso",
        });
    }
};

export default new ProductController();
