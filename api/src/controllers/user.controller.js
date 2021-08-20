const { response } = require('express');
const db = require('../config/database');

exports.listAllUsers = async (req, res) => {
    const response = await db.query(
        `
            SELECT
                *
            FROM
                users
            ORDER BY
                name ASC
        `
    );

    res.status(200).send(response.rows);
};

exports.listUsersById = async (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(userId);
    const response = await db.query('SELECT * FROM users WHERE users.id = $1', [userId]);
    res.status(200).send(response.rows);
};

exports.createUser = async (req,res) => {
    const {name, birth_date, address, cep, ddd, phone_number, login, senha} = req.body;
    const {rows} = await db.query(
        `
            INSERT INTO 
                users (name, birth_date, address, cep, ddd, phone_number, login, senha)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
        [name, birth_date, address, cep, ddd, phone_number, login, senha]
    );

    res.status(201).send({
        message: `User ${name} added succesfully!`,
        body: {
          product: { name, birth_date, address, cep, ddd, phone_number, login, senha }
        },
      });
};


exports.updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, birth_date, address, cep, ddd, phone_number, login, senha } = req.body;
  
    const response = await db.query(
      `
        UPDATE
          users
        SET 
          name = $1,
          birth_date = $2,
          address = $3,
          cep = $4, 
          ddd = $5,
          phone_number = $6,
          login = $7,
          senha = $8
        WHERE 
          id = $9
      `,
      [name, birth_date, address, cep, ddd, phone_number, login, senha, userId]
    );
  
    res.status(200).send({ message: `User ${name} had their data changed !` });
};

// exports.disableUser = async (req,res) => {
//     const userId = parseInt(req.params.id);

//     const response = await db.query(
//         "UPDATE users SET status = false where id = $1"
//         , [userId]
//     );
//     res.status(200).send({ message: "User is enable !" });
// };