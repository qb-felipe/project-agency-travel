const db = require('../config/database');

//ok
exports.generateTicket = async (req,res) => {
    const { id_package, plane_seat, price, air_company} = req.body;
    const { rows } = await db.query(
        `   INSERT INTO 
                tickets (id_package, plane_seat, price, air_company)
            VALUES 
                ($1, $2, $3, $4)`,
                [id_package, plane_seat, price, air_company]
    );
  
    res.status(201).send({
      message: "Ticket added successfully!",
      body: {
        product: { id_package, plane_seat, price, air_company }
      },
    });
};

exports.listAllTickets = async ( req, res) => {
    const response = await db.query(`
    SELECT 
      *
    FROM
      tickets 
    ORDER BY
      id_package ASC
  `);
  
  res.status(200).send(response.rows);
};

exports.listTicketsById = async (req, res) => {
    const ticketId = parseInt(req.params.id);
    const response = await db.query(
        `
            SELECT
                *
            FROM
                tickets
            WHERE
                tickets.id = $1
        `,
        [ticketId]);
    res.status(200).send(response.row);
};

exports.updateTicket = async (req, res) => {
    const ticketId = parseInt(req.params.id);
    const { id_package, plane_seat, price, air_company } = req.body;
  
    const response = await db.query(
      `
        UPDATE
          tickets
        SET 
            id_package = $1,
            plane_seat = $2,
            price = $3,
            air_company = $4
        WHERE 
          id = $5
      `,
      [id_package, plane_seat, price, air_company, ticketId]
    );
  
    res.status(200).send({ message: "Ticket Updated Successfully!" });
};