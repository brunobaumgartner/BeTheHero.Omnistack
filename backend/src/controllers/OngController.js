const connection = require('../database/conection');
const crypto = require('crypto');


module.exports ={


    async index (req, res){
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },



    //            Cadastra uma ong na tabela
    async create(req, res){
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return res.json({id});

    }
}