const jswTokan = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (token != undefined) {
            const istokeanValid=jswTokan.verify(token,process.env.SECRETKEY);
            // Geting Payload From Tokean
            next();
        }
        else {
            res.status(400).json({ msg: "Error in Tokan /Invalid Tokan" });
        }
    } catch (error) {
        res.status(400).json({ msg: "Error in Tokan /Invalid Tokan" + error });
    }
}