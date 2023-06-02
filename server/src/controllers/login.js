const users = require('../utils/users');


module.exports = (req, res) => {
    const { email, password } = req.query;
    let acces = false;
    users.forEach((user) => {
        if (user.email === email && user.password === password) {
            acces = true;
        }
    })

    return res.status(200).json({acces});
}