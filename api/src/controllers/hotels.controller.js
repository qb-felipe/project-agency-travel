const db = require('../config/database');

exports.listAllHotels = async (req, res) => {
    const response = await db.query(
        `
            SELECT 
                *
            FROM
                hotels 
            ORDER BY
                name ASC
        `
    );
    
    res.status(200).send(response.rows);
};

exports.addHotel = async (req,res) => {
    const {name, daily_voucher_price, address, postal_zip} = req.body;
    const { rows } = await db.query(
        `   INSERT INTO 
                hotels (name, daily_voucher_price, address, postal_zip)
            VALUES 
                ($1, $2, $3, $4)`,
                [name, daily_voucher_price, address, postal_zip]
    );
  
    res.status(201).send({
      message: "Hotel added successfully!",
      body: {
        product: { name, daily_voucher_price, address, postal_zip }
      },
    });
};

exports.changeHotel = async (req, res) => {
    const hotelId = parseInt(req.params.id);
    const { name, daily_voucher_price, address, postal_zip } = req.body;
  
    const response = await db.query(
      `
        UPDATE
          hotels
        SET 
          name = $1,
          daily_voucher_price = $2,
          address = $3,
          postal_zip = $4
        WHERE 
          id = $5
      `,
      [ name, daily_voucher_price, address, postal_zip, hotelId]
    );
  
    res.status(200).send({ message: `Hotel ${name} had their data changed!` });
};

