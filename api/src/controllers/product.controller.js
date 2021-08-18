/*
    Deixei o nome product por convenção, mas meu produto corresponde a minha tabela 'Packages' 
    do meu BD.
*/

const db = require('../config/database');

exports.createProduct = async (req, res) => {
    const {name, description, days, price, city, state} = req.body;
    const { rows } = await db.query(
        `INSERT INTO packages (name,description,days,price,city,state)
        VALUES 
            ($1, $2, $3, $4, $5, $6)`,
        [name, description, days, price, city, state]
    );
  
    res.status(201).send({
      message: "Product added successfully!",
      body: {
        product: { name, description, days, price, city, state }
      },
    });
  };