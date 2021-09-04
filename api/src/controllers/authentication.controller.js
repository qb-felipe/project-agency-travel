const db = require('../config/database');


// const cookieParser = require('cookie-parser');
// const crypto = require('crypto');
// const bcrypt = require('bcrypt');


exports.loginAuthentication = async (req,res) => {
    const {login, password} = req.body;

    const response = await db.query(
        `
            SELECT 
                login,
                password
            FROM
                users
            WHERE
                login = $1 and password = $2
        `, 
        [login, password]
    ); 

    res.status(200).send(response.rows);

};


// function cript(_response){

//     const header = JSON.stringify({
//         'alg': 'HS256',
//         'typ': 'JWT'
//     });

//     const payload = JSON.stringify(_response);

//     const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
//     const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
//     const secret = 'custom-secret';

//     const data = base64Header + '.' + base64Payload;

//     const signature = crypto
//         .createHmac('sha256', secret)
//         .update(data)
//         .digest('base64');

//     const signatureUrl = signature
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_')
//         .replace(/=/g, '')

//     console.log(signatureUrl);

// }
