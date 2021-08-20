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

exports.listAllProducts = async (req, res) => {
  const response = await db.query(`
    SELECT 
      *
    FROM
      packages 
    ORDER BY
      name ASC
  `);
  
  res.status(200).send(response.rows);
};


exports.findProductById = async (req,res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query(`
    SELECT
      *
    FROM
      packages
    WHERE
      packages.id = $1
  `, [productId]);
  res.status(200).send(response.row);
};


exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, description, days, price, city, state } = req.body;

  const response = await db.query(
    `
      UPDATE
        packages
      SET 
        name = $1,
        description = $2,
        days = $3,
        price = $4, 
        city = $5,
        state= $6 
      WHERE 
        id = $7
    `,
    [name, description, days, price, city, state, productId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
};
